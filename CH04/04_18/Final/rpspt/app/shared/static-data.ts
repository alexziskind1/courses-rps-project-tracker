export enum ItemTypeEnum {
    PBI = 1,
    Bug = 2,
    Chore = 3,
    Impediment = 4
}
export namespace ItemTypeEnum {
    export function getIndicatorClass(type: ItemTypeEnum): string {
        switch (type) {
            case ItemTypeEnum.PBI:
                return 'indicator-pbi';
            case ItemTypeEnum.Bug:
                return 'indicator-bug';
            case ItemTypeEnum.Chore:
                return 'indicator-chore';
            case ItemTypeEnum.Impediment:
                return 'indicator-impediment';
            default:
                return '';
        }
    }
    export function getImage(type: ItemTypeEnum): string {
        switch (type) {
            case ItemTypeEnum.PBI:
                return '~/images/i-pbi.png';
            case ItemTypeEnum.Bug:
                return '~/images/i-bug.png';
            case ItemTypeEnum.Chore:
                return '~/images/i-chore.png';
            case ItemTypeEnum.Impediment:
                return '~/images/i-impediment.png';
            default:
                return '';
        }
    }
}

export enum PriorityEnum {
    Low = 1,
    Medium = 2,
    High = 3,
    Critical = 4
}
export namespace PriorityEnum {
    export function isMax(priority: PriorityEnum): boolean {
        return priority === PriorityEnum.Critical;
    }
    export function isMin(priority: PriorityEnum): boolean {
        return priority === PriorityEnum.Low;
    }
    export function nextPriority(priority: PriorityEnum): PriorityEnum {
        switch (priority) {
            case PriorityEnum.Critical:
                return undefined;
            case PriorityEnum.High:
                return PriorityEnum.Critical;
            case PriorityEnum.Medium:
                return PriorityEnum.High;
            case PriorityEnum.Low:
                return PriorityEnum.Medium;
        }
    }
    export function previousPriority(priority: PriorityEnum): PriorityEnum {
        switch (priority) {
            case PriorityEnum.Critical:
                return PriorityEnum.High;
            case PriorityEnum.High:
                return PriorityEnum.Medium;
            case PriorityEnum.Medium:
                return PriorityEnum.Low;
            case PriorityEnum.Low:
                return undefined;
        }
    }
    export function getIndicatorClass(priority: PriorityEnum): string {
        switch (priority) {
            case PriorityEnum.Critical:
                return 'indicator-priority critical';
            case PriorityEnum.High:
                return 'indicator-priority high';
            case PriorityEnum.Medium:
                return 'indicator-priority medium';
            case PriorityEnum.Low:
                return 'indicator-priority low';
            default:
                return '';
        }
    }
}

export enum StatusEnum {
    Submitted = 1,
    Open = 2,
    Closed = 3,
    ReOpened = 4
}
