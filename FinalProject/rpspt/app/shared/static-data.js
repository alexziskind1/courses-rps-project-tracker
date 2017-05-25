"use strict";
var ItemTypeEnum;
(function (ItemTypeEnum) {
    ItemTypeEnum[ItemTypeEnum["PBI"] = 1] = "PBI";
    ItemTypeEnum[ItemTypeEnum["Bug"] = 2] = "Bug";
    ItemTypeEnum[ItemTypeEnum["Chore"] = 3] = "Chore";
    ItemTypeEnum[ItemTypeEnum["Impediment"] = 4] = "Impediment";
})(ItemTypeEnum = exports.ItemTypeEnum || (exports.ItemTypeEnum = {}));
(function (ItemTypeEnum) {
    function getIndicatorClass(type) {
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
    ItemTypeEnum.getIndicatorClass = getIndicatorClass;
    function getImage(type) {
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
    ItemTypeEnum.getImage = getImage;
})(ItemTypeEnum = exports.ItemTypeEnum || (exports.ItemTypeEnum = {}));
var PriorityEnum;
(function (PriorityEnum) {
    PriorityEnum[PriorityEnum["Low"] = 1] = "Low";
    PriorityEnum[PriorityEnum["Medium"] = 2] = "Medium";
    PriorityEnum[PriorityEnum["High"] = 3] = "High";
    PriorityEnum[PriorityEnum["Critical"] = 4] = "Critical";
})(PriorityEnum = exports.PriorityEnum || (exports.PriorityEnum = {}));
(function (PriorityEnum) {
    function isMax(priority) {
        return priority === PriorityEnum.Critical;
    }
    PriorityEnum.isMax = isMax;
    function isMin(priority) {
        return priority === PriorityEnum.Low;
    }
    PriorityEnum.isMin = isMin;
    function nextPriority(priority) {
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
    PriorityEnum.nextPriority = nextPriority;
    function previousPriority(priority) {
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
    PriorityEnum.previousPriority = previousPriority;
    function getIndicatorClass(priority) {
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
    PriorityEnum.getIndicatorClass = getIndicatorClass;
})(PriorityEnum = exports.PriorityEnum || (exports.PriorityEnum = {}));
var StatusEnum;
(function (StatusEnum) {
    StatusEnum[StatusEnum["Submitted"] = 1] = "Submitted";
    StatusEnum[StatusEnum["Open"] = 2] = "Open";
    StatusEnum[StatusEnum["Closed"] = 3] = "Closed";
    StatusEnum[StatusEnum["ReOpened"] = 4] = "ReOpened";
})(StatusEnum = exports.StatusEnum || (exports.StatusEnum = {}));
/*
export const estimateValues: Array<PTDomain.IEstimate> = [
    { name: '1 point', color: '' },
    { name: '2 points', color: '' },
    { name: '3 points', color: '' },
    { name: '4 points', color: '' }
];
*/
/*
export const itemTypeValues: Array<PTDomain.IItemType> = [
    { name: 'PBI', image: '', value: PTDomain.ItemTypeEnum.PBI },
    { name: 'Bug', image: '', value: PTDomain.ItemTypeEnum.Bug },
    { name: 'Chore', image: '', value: PTDomain.ItemTypeEnum.Chore },
    { name: 'Impediment', image: '', value: PTDomain.ItemTypeEnum.Impediment }
];

export const priorityValues: Array<PTDomain.IPriority> = [
    { name: 'Critical', color: 'red' },
    { name: 'High', color: 'yellow' },
    { name: 'Medium', color: 'blue' },
    { name: 'Low', color: 'green' }
];

export const statusValues: Array<PTDomain.IStatus> = [
    { name: 'Submitted' },
    { name: 'Open' },
    { name: 'Closed' },
    { name: 'Re-opened' }
];
*/ 
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljLWRhdGEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzdGF0aWMtZGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBWSxZQUtYO0FBTEQsV0FBWSxZQUFZO0lBQ3BCLDZDQUFPLENBQUE7SUFDUCw2Q0FBTyxDQUFBO0lBQ1AsaURBQVMsQ0FBQTtJQUNULDJEQUFjLENBQUE7QUFDbEIsQ0FBQyxFQUxXLFlBQVksR0FBWixvQkFBWSxLQUFaLG9CQUFZLFFBS3ZCO0FBQ0QsV0FBaUIsWUFBWTtJQUN6QiwyQkFBa0MsSUFBa0I7UUFDaEQsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNYLEtBQUssWUFBWSxDQUFDLEdBQUc7Z0JBQ2pCLE1BQU0sQ0FBQyxlQUFlLENBQUM7WUFDM0IsS0FBSyxZQUFZLENBQUMsR0FBRztnQkFDakIsTUFBTSxDQUFDLGVBQWUsQ0FBQztZQUMzQixLQUFLLFlBQVksQ0FBQyxLQUFLO2dCQUNuQixNQUFNLENBQUMsaUJBQWlCLENBQUM7WUFDN0IsS0FBSyxZQUFZLENBQUMsVUFBVTtnQkFDeEIsTUFBTSxDQUFDLHNCQUFzQixDQUFDO1lBQ2xDO2dCQUNJLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDbEIsQ0FBQztJQUNMLENBQUM7SUFiZSw4QkFBaUIsb0JBYWhDLENBQUE7SUFDRCxrQkFBeUIsSUFBa0I7UUFDdkMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNYLEtBQUssWUFBWSxDQUFDLEdBQUc7Z0JBQ2pCLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQztZQUNoQyxLQUFLLFlBQVksQ0FBQyxHQUFHO2dCQUNqQixNQUFNLENBQUMsb0JBQW9CLENBQUM7WUFDaEMsS0FBSyxZQUFZLENBQUMsS0FBSztnQkFDbkIsTUFBTSxDQUFDLHNCQUFzQixDQUFDO1lBQ2xDLEtBQUssWUFBWSxDQUFDLFVBQVU7Z0JBQ3hCLE1BQU0sQ0FBQywyQkFBMkIsQ0FBQztZQUN2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RW51bSB7XG4gICAgUEJJID0gMSxcbiAgICBCdWcgPSAyLFxuICAgIENob3JlID0gMyxcbiAgICBJbXBlZGltZW50ID0gNFxufVxuZXhwb3J0IG5hbWVzcGFjZSBJdGVtVHlwZUVudW0ge1xuICAgIGV4cG9ydCBmdW5jdGlvbiBnZXRJbmRpY2F0b3JDbGFzcyh0eXBlOiBJdGVtVHlwZUVudW0pOiBzdHJpbmcge1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgSXRlbVR5cGVFbnVtLlBCSTpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2luZGljYXRvci1wYmknO1xuICAgICAgICAgICAgY2FzZSBJdGVtVHlwZUVudW0uQnVnOlxuICAgICAgICAgICAgICAgIHJldHVybiAnaW5kaWNhdG9yLWJ1Zyc7XG4gICAgICAgICAgICBjYXNlIEl0ZW1UeXBlRW51bS5DaG9yZTpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2luZGljYXRvci1jaG9yZSc7XG4gICAgICAgICAgICBjYXNlIEl0ZW1UeXBlRW51bS5JbXBlZGltZW50OlxuICAgICAgICAgICAgICAgIHJldHVybiAnaW5kaWNhdG9yLWltcGVkaW1lbnQnO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZXhwb3J0IGZ1bmN0aW9uIGdldEltYWdlKHR5cGU6IEl0ZW1UeXBlRW51bSk6IHN0cmluZyB7XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSBJdGVtVHlwZUVudW0uUEJJOlxuICAgICAgICAgICAgICAgIHJldHVybiAnfi9pbWFnZXMvaS1wYmkucG5nJztcbiAgICAgICAgICAgIGNhc2UgSXRlbVR5cGVFbnVtLkJ1ZzpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ34vaW1hZ2VzL2ktYnVnLnBuZyc7XG4gICAgICAgICAgICBjYXNlIEl0ZW1UeXBlRW51bS5DaG9yZTpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ34vaW1hZ2VzL2ktY2hvcmUucG5nJztcbiAgICAgICAgICAgIGNhc2UgSXRlbVR5cGVFbnVtLkltcGVkaW1lbnQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuICd+L2ltYWdlcy9pLWltcGVkaW1lbnQucG5nJztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZW51bSBQcmlvcml0eUVudW0ge1xuICAgIExvdyA9IDEsXG4gICAgTWVkaXVtID0gMixcbiAgICBIaWdoID0gMyxcbiAgICBDcml0aWNhbCA9IDRcbn1cbmV4cG9ydCBuYW1lc3BhY2UgUHJpb3JpdHlFbnVtIHtcbiAgICBleHBvcnQgZnVuY3Rpb24gaXNNYXgocHJpb3JpdHk6IFByaW9yaXR5RW51bSk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gcHJpb3JpdHkgPT09IFByaW9yaXR5RW51bS5Dcml0aWNhbDtcbiAgICB9XG4gICAgZXhwb3J0IGZ1bmN0aW9uIGlzTWluKHByaW9yaXR5OiBQcmlvcml0eUVudW0pOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHByaW9yaXR5ID09PSBQcmlvcml0eUVudW0uTG93O1xuICAgIH1cbiAgICBleHBvcnQgZnVuY3Rpb24gbmV4dFByaW9yaXR5KHByaW9yaXR5OiBQcmlvcml0eUVudW0pOiBQcmlvcml0eUVudW0ge1xuICAgICAgICBzd2l0Y2ggKHByaW9yaXR5KSB7XG4gICAgICAgICAgICBjYXNlIFByaW9yaXR5RW51bS5Dcml0aWNhbDpcbiAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgY2FzZSBQcmlvcml0eUVudW0uSGlnaDpcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJpb3JpdHlFbnVtLkNyaXRpY2FsO1xuICAgICAgICAgICAgY2FzZSBQcmlvcml0eUVudW0uTWVkaXVtOlxuICAgICAgICAgICAgICAgIHJldHVybiBQcmlvcml0eUVudW0uSGlnaDtcbiAgICAgICAgICAgIGNhc2UgUHJpb3JpdHlFbnVtLkxvdzpcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJpb3JpdHlFbnVtLk1lZGl1bTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBleHBvcnQgZnVuY3Rpb24gcHJldmlvdXNQcmlvcml0eShwcmlvcml0eTogUHJpb3JpdHlFbnVtKTogUHJpb3JpdHlFbnVtIHtcbiAgICAgICAgc3dpdGNoIChwcmlvcml0eSkge1xuICAgICAgICAgICAgY2FzZSBQcmlvcml0eUVudW0uQ3JpdGljYWw6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFByaW9yaXR5RW51bS5IaWdoO1xuICAgICAgICAgICAgY2FzZSBQcmlvcml0eUVudW0uSGlnaDpcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJpb3JpdHlFbnVtLk1lZGl1bTtcbiAgICAgICAgICAgIGNhc2UgUHJpb3JpdHlFbnVtLk1lZGl1bTpcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJpb3JpdHlFbnVtLkxvdztcbiAgICAgICAgICAgIGNhc2UgUHJpb3JpdHlFbnVtLkxvdzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgfVxuICAgIGV4cG9ydCBmdW5jdGlvbiBnZXRJbmRpY2F0b3JDbGFzcyhwcmlvcml0eTogUHJpb3JpdHlFbnVtKTogc3RyaW5nIHtcbiAgICAgICAgc3dpdGNoIChwcmlvcml0eSkge1xuICAgICAgICAgICAgY2FzZSBQcmlvcml0eUVudW0uQ3JpdGljYWw6XG4gICAgICAgICAgICAgICAgcmV0dXJuICdpbmRpY2F0b3ItcHJpb3JpdHkgY3JpdGljYWwnO1xuICAgICAgICAgICAgY2FzZSBQcmlvcml0eUVudW0uSGlnaDpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2luZGljYXRvci1wcmlvcml0eSBoaWdoJztcbiAgICAgICAgICAgIGNhc2UgUHJpb3JpdHlFbnVtLk1lZGl1bTpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2luZGljYXRvci1wcmlvcml0eSBtZWRpdW0nO1xuICAgICAgICAgICAgY2FzZSBQcmlvcml0eUVudW0uTG93OlxuICAgICAgICAgICAgICAgIHJldHVybiAnaW5kaWNhdG9yLXByaW9yaXR5IGxvdyc7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGVudW0gU3RhdHVzRW51bSB7XG4gICAgU3VibWl0dGVkID0gMSxcbiAgICBPcGVuID0gMixcbiAgICBDbG9zZWQgPSAzLFxuICAgIFJlT3BlbmVkID0gNFxufVxuXG5cblxuLypcbmV4cG9ydCBjb25zdCBlc3RpbWF0ZVZhbHVlczogQXJyYXk8UFREb21haW4uSUVzdGltYXRlPiA9IFtcbiAgICB7IG5hbWU6ICcxIHBvaW50JywgY29sb3I6ICcnIH0sXG4gICAgeyBuYW1lOiAnMiBwb2ludHMnLCBjb2xvcjogJycgfSxcbiAgICB7IG5hbWU6ICczIHBvaW50cycsIGNvbG9yOiAnJyB9LFxuICAgIHsgbmFtZTogJzQgcG9pbnRzJywgY29sb3I6ICcnIH1cbl07XG4qL1xuXG4vKlxuZXhwb3J0IGNvbnN0IGl0ZW1UeXBlVmFsdWVzOiBBcnJheTxQVERvbWFpbi5JSXRlbVR5cGU+ID0gW1xuICAgIHsgbmFtZTogJ1BCSScsIGltYWdlOiAnJywgdmFsdWU6IFBURG9tYWluLkl0ZW1UeXBlRW51bS5QQkkgfSxcbiAgICB7IG5hbWU6ICdCdWcnLCBpbWFnZTogJycsIHZhbHVlOiBQVERvbWFpbi5JdGVtVHlwZUVudW0uQnVnIH0sXG4gICAgeyBuYW1lOiAnQ2hvcmUnLCBpbWFnZTogJycsIHZhbHVlOiBQVERvbWFpbi5JdGVtVHlwZUVudW0uQ2hvcmUgfSxcbiAgICB7IG5hbWU6ICdJbXBlZGltZW50JywgaW1hZ2U6ICcnLCB2YWx1ZTogUFREb21haW4uSXRlbVR5cGVFbnVtLkltcGVkaW1lbnQgfVxuXTtcblxuZXhwb3J0IGNvbnN0IHByaW9yaXR5VmFsdWVzOiBBcnJheTxQVERvbWFpbi5JUHJpb3JpdHk+ID0gW1xuICAgIHsgbmFtZTogJ0NyaXRpY2FsJywgY29sb3I6ICdyZWQnIH0sXG4gICAgeyBuYW1lOiAnSGlnaCcsIGNvbG9yOiAneWVsbG93JyB9LFxuICAgIHsgbmFtZTogJ01lZGl1bScsIGNvbG9yOiAnYmx1ZScgfSxcbiAgICB7IG5hbWU6ICdMb3cnLCBjb2xvcjogJ2dyZWVuJyB9XG5dO1xuXG5leHBvcnQgY29uc3Qgc3RhdHVzVmFsdWVzOiBBcnJheTxQVERvbWFpbi5JU3RhdHVzPiA9IFtcbiAgICB7IG5hbWU6ICdTdWJtaXR0ZWQnIH0sXG4gICAgeyBuYW1lOiAnT3BlbicgfSxcbiAgICB7IG5hbWU6ICdDbG9zZWQnIH0sXG4gICAgeyBuYW1lOiAnUmUtb3BlbmVkJyB9XG5dO1xuKi8iXX0=