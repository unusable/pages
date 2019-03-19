export interface ContinuousSpaceRange {
    from: number;
    to: number;
}

export interface ContinuousSpacePosition {
    x: number;
}

export interface IsometricSpacePosition {
    index: number;
}

export interface IsometricSpaceRange {
    indexes: IsometricSpacePosition[];
}

/**
 * Transform continuous space to discrete space
 * Isometric space in every index
 */
export class IsometricSpace {

    /**
     * @param unit - 浮点空间转整数空间的单位长度
     * @param origin - 原点位置
     * @param handler - 对象处理接口
     */
    public constructor(private unit: number, private origin: number) {
    }

    /**
     * 空间范围到Index数组转化
     * @param range 
     */
    public rangeC2I(range: ContinuousSpaceRange): IsometricSpaceRange {
        const from = Math.floor((range.from - this.origin) / this.unit);
        const to = Math.ceil((range.to - this.origin) / this.unit);
        let indexes = [];
        for (let i = from; i < to; i++) {
            indexes.push(this.getIndex(i));
        }
        return { indexes: indexes };
    }

    /**
     * 连续空间位置映射到离散空间
     * @param position 
     */
    public positionC2I(position: ContinuousSpacePosition): IsometricSpacePosition {
        const i = Math.floor((position.x - this.origin) / this.unit);
        return this.getIndex(i);
    }

    /**
     * 离散空间位置映射到连续空间
     * @param index 
     */
    public positionI2C(index: IsometricSpacePosition): ContinuousSpacePosition {
        return { x: index.index * this.unit + this.origin };
    }

    /**
     * 离散空间点在范围中的检测
     * @param indexes 
     * @param index 
     */
    public static contain(range: IsometricSpaceRange, index: IsometricSpacePosition): boolean {
        return 0 <= range.indexes.findIndex((i) => i.index === index.index);
    }

    /**
     * 离散空间位置相同判断
     * @param a 
     * @param b 
     */
    public static equal(a: IsometricSpacePosition, b: IsometricSpacePosition) {
        return a === b;
    }

    private indexes = new Map<number, IsometricSpacePosition>();
    private getIndex(index: number) {
        let p = this.indexes.get(index);
        if (!p) {
            p = { index: index };
            this.indexes.set(index, p);
        }
        return p;
    }
}
