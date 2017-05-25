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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljLWRhdGEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzdGF0aWMtZGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBWSxZQUtYO0FBTEQsV0FBWSxZQUFZO0lBQ3BCLDZDQUFPLENBQUE7SUFDUCw2Q0FBTyxDQUFBO0lBQ1AsaURBQVMsQ0FBQTtJQUNULDJEQUFjLENBQUE7QUFDbEIsQ0FBQyxFQUxXLFlBQVksR0FBWixvQkFBWSxLQUFaLG9CQUFZLFFBS3ZCO0FBQ0QsV0FBaUIsWUFBWTtJQUN6QiwyQkFBa0MsSUFBa0I7UUFDaEQsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNYLEtBQUssWUFBWSxDQUFDLEdBQUc7Z0JBQ2pCLE1BQU0sQ0FBQyxlQUFlLENBQUM7WUFDM0IsS0FBSyxZQUFZLENBQUMsR0FBRztnQkFDakIsTUFBTSxDQUFDLGVBQWUsQ0FBQztZQUMzQixLQUFLLFlBQVksQ0FBQyxLQUFLO2dCQUNuQixNQUFNLENBQUMsaUJBQWlCLENBQUM7WUFDN0IsS0FBSyxZQUFZLENBQUMsVUFBVTtnQkFDeEIsTUFBTSxDQUFDLHNCQUFzQixDQUFDO1lBQ2xDO2dCQUNJLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDbEIsQ0FBQztJQUNMLENBQUM7SUFiZSw4QkFBaUIsb0JBYWhDLENBQUE7SUFDRCxrQkFBeUIsSUFBa0I7UUFDdkMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNYLEtBQUssWUFBWSxDQUFDLEdBQUc7Z0JBQ2pCLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQztZQUNoQyxLQUFLLFlBQVksQ0FBQyxHQUFHO2dCQUNqQixNQUFNLENBQUMsb0JBQW9CLENBQUM7WUFDaEMsS0FBSyxZQUFZLENBQUMsS0FBSztnQkFDbkIsTUFBTSxDQUFDLHNCQUFzQixDQUFDO1lBQ2xDLEtBQUssWUFBWSxDQUFDLFVBQVU7Z0JBQ3hCLE1BQU0sQ0FBQywyQkFBMkIsQ0FBQztZQUN2QztnQkFDSSxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ2xCLENBQUM7SUFDTCxDQUFDO0lBYmUscUJBQVEsV0FhdkIsQ0FBQTtBQUNMLENBQUMsRUE3QmdCLFlBQVksR0FBWixvQkFBWSxLQUFaLG9CQUFZLFFBNkI1QjtBQUVELElBQVksWUFLWDtBQUxELFdBQVksWUFBWTtJQUNwQiw2Q0FBTyxDQUFBO0lBQ1AsbURBQVUsQ0FBQTtJQUNWLCtDQUFRLENBQUE7SUFDUix1REFBWSxDQUFBO0FBQ2hCLENBQUMsRUFMVyxZQUFZLEdBQVosb0JBQVksS0FBWixvQkFBWSxRQUt2QjtBQUNELFdBQWlCLFlBQVk7SUFDekIsZUFBc0IsUUFBc0I7UUFDeEMsTUFBTSxDQUFDLFFBQVEsS0FBSyxZQUFZLENBQUMsUUFBUSxDQUFDO0lBQzlDLENBQUM7SUFGZSxrQkFBSyxRQUVwQixDQUFBO0lBQ0QsZUFBc0IsUUFBc0I7UUFDeEMsTUFBTSxDQUFDLFFBQVEsS0FBSyxZQUFZLENBQUMsR0FBRyxDQUFDO0lBQ3pDLENBQUM7SUFGZSxrQkFBSyxRQUVwQixDQUFBO0lBQ0Qsc0JBQTZCLFFBQXNCO1FBQy9DLE1BQU0sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDZixLQUFLLFlBQVksQ0FBQyxRQUFRO2dCQUN0QixNQUFNLENBQUMsU0FBUyxDQUFDO1lBQ3JCLEtBQUssWUFBWSxDQUFDLElBQUk7Z0JBQ2xCLE1BQU0sQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDO1lBQ2pDLEtBQUssWUFBWSxDQUFDLE1BQU07Z0JBQ3BCLE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDO1lBQzdCLEtBQUssWUFBWSxDQUFDLEdBQUc7Z0JBQ2pCLE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDO1FBQ25DLENBQUM7SUFDTCxDQUFDO0lBWGUseUJBQVksZUFXM0IsQ0FBQTtJQUNELDBCQUFpQyxRQUFzQjtRQUNuRCxNQUFNLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ2YsS0FBSyxZQUFZLENBQUMsUUFBUTtnQkFDdEIsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUM7WUFDN0IsS0FBSyxZQUFZLENBQUMsSUFBSTtnQkFDbEIsTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUM7WUFDL0IsS0FBSyxZQUFZLENBQUMsTUFBTTtnQkFDcEIsTUFBTSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUM7WUFDNUIsS0FBSyxZQUFZLENBQUMsR0FBRztnQkFDakIsTUFBTSxDQUFDLFNBQVMsQ0FBQztRQUN6QixDQUFDO0lBQ0wsQ0FBQztJQVhlLDZCQUFnQixtQkFXL0IsQ0FBQTtJQUNELDJCQUFrQyxRQUFzQjtRQUNwRCxNQUFNLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ2YsS0FBSyxZQUFZLENBQUMsUUFBUTtnQkFDdEIsTUFBTSxDQUFDLDZCQUE2QixDQUFDO1lBQ3pDLEtBQUssWUFBWSxDQUFDLElBQUk7Z0JBQ2xCLE1BQU0sQ0FBQyx5QkFBeUIsQ0FBQztZQUNyQyxLQUFLLFlBQVksQ0FBQyxNQUFNO2dCQUNwQixNQUFNLENBQUMsMkJBQTJCLENBQUM7WUFDdkMsS0FBSyxZQUFZLENBQUMsR0FBRztnQkFDakIsTUFBTSxDQUFDLHdCQUF3QixDQUFDO1lBQ3BDO2dCQUNJLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDbEIsQ0FBQztJQUNMLENBQUM7SUFiZSw4QkFBaUIsb0JBYWhDLENBQUE7QUFDTCxDQUFDLEVBN0NnQixZQUFZLEdBQVosb0JBQVksS0FBWixvQkFBWSxRQTZDNUI7QUFFRCxJQUFZLFVBS1g7QUFMRCxXQUFZLFVBQVU7SUFDbEIscURBQWEsQ0FBQTtJQUNiLDJDQUFRLENBQUE7SUFDUiwrQ0FBVSxDQUFBO0lBQ1YsbURBQVksQ0FBQTtBQUNoQixDQUFDLEVBTFcsVUFBVSxHQUFWLGtCQUFVLEtBQVYsa0JBQVUsUUFLckIiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZW51bSBJdGVtVHlwZUVudW0ge1xuICAgIFBCSSA9IDEsXG4gICAgQnVnID0gMixcbiAgICBDaG9yZSA9IDMsXG4gICAgSW1wZWRpbWVudCA9IDRcbn1cbmV4cG9ydCBuYW1lc3BhY2UgSXRlbVR5cGVFbnVtIHtcbiAgICBleHBvcnQgZnVuY3Rpb24gZ2V0SW5kaWNhdG9yQ2xhc3ModHlwZTogSXRlbVR5cGVFbnVtKTogc3RyaW5nIHtcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlIEl0ZW1UeXBlRW51bS5QQkk6XG4gICAgICAgICAgICAgICAgcmV0dXJuICdpbmRpY2F0b3ItcGJpJztcbiAgICAgICAgICAgIGNhc2UgSXRlbVR5cGVFbnVtLkJ1ZzpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2luZGljYXRvci1idWcnO1xuICAgICAgICAgICAgY2FzZSBJdGVtVHlwZUVudW0uQ2hvcmU6XG4gICAgICAgICAgICAgICAgcmV0dXJuICdpbmRpY2F0b3ItY2hvcmUnO1xuICAgICAgICAgICAgY2FzZSBJdGVtVHlwZUVudW0uSW1wZWRpbWVudDpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2luZGljYXRvci1pbXBlZGltZW50JztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG4gICAgfVxuICAgIGV4cG9ydCBmdW5jdGlvbiBnZXRJbWFnZSh0eXBlOiBJdGVtVHlwZUVudW0pOiBzdHJpbmcge1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgSXRlbVR5cGVFbnVtLlBCSTpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ34vaW1hZ2VzL2ktcGJpLnBuZyc7XG4gICAgICAgICAgICBjYXNlIEl0ZW1UeXBlRW51bS5CdWc6XG4gICAgICAgICAgICAgICAgcmV0dXJuICd+L2ltYWdlcy9pLWJ1Zy5wbmcnO1xuICAgICAgICAgICAgY2FzZSBJdGVtVHlwZUVudW0uQ2hvcmU6XG4gICAgICAgICAgICAgICAgcmV0dXJuICd+L2ltYWdlcy9pLWNob3JlLnBuZyc7XG4gICAgICAgICAgICBjYXNlIEl0ZW1UeXBlRW51bS5JbXBlZGltZW50OlxuICAgICAgICAgICAgICAgIHJldHVybiAnfi9pbWFnZXMvaS1pbXBlZGltZW50LnBuZyc7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGVudW0gUHJpb3JpdHlFbnVtIHtcbiAgICBMb3cgPSAxLFxuICAgIE1lZGl1bSA9IDIsXG4gICAgSGlnaCA9IDMsXG4gICAgQ3JpdGljYWwgPSA0XG59XG5leHBvcnQgbmFtZXNwYWNlIFByaW9yaXR5RW51bSB7XG4gICAgZXhwb3J0IGZ1bmN0aW9uIGlzTWF4KHByaW9yaXR5OiBQcmlvcml0eUVudW0pOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHByaW9yaXR5ID09PSBQcmlvcml0eUVudW0uQ3JpdGljYWw7XG4gICAgfVxuICAgIGV4cG9ydCBmdW5jdGlvbiBpc01pbihwcmlvcml0eTogUHJpb3JpdHlFbnVtKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBwcmlvcml0eSA9PT0gUHJpb3JpdHlFbnVtLkxvdztcbiAgICB9XG4gICAgZXhwb3J0IGZ1bmN0aW9uIG5leHRQcmlvcml0eShwcmlvcml0eTogUHJpb3JpdHlFbnVtKTogUHJpb3JpdHlFbnVtIHtcbiAgICAgICAgc3dpdGNoIChwcmlvcml0eSkge1xuICAgICAgICAgICAgY2FzZSBQcmlvcml0eUVudW0uQ3JpdGljYWw6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgIGNhc2UgUHJpb3JpdHlFbnVtLkhpZ2g6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFByaW9yaXR5RW51bS5Dcml0aWNhbDtcbiAgICAgICAgICAgIGNhc2UgUHJpb3JpdHlFbnVtLk1lZGl1bTpcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJpb3JpdHlFbnVtLkhpZ2g7XG4gICAgICAgICAgICBjYXNlIFByaW9yaXR5RW51bS5Mb3c6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFByaW9yaXR5RW51bS5NZWRpdW07XG4gICAgICAgIH1cbiAgICB9XG4gICAgZXhwb3J0IGZ1bmN0aW9uIHByZXZpb3VzUHJpb3JpdHkocHJpb3JpdHk6IFByaW9yaXR5RW51bSk6IFByaW9yaXR5RW51bSB7XG4gICAgICAgIHN3aXRjaCAocHJpb3JpdHkpIHtcbiAgICAgICAgICAgIGNhc2UgUHJpb3JpdHlFbnVtLkNyaXRpY2FsOlxuICAgICAgICAgICAgICAgIHJldHVybiBQcmlvcml0eUVudW0uSGlnaDtcbiAgICAgICAgICAgIGNhc2UgUHJpb3JpdHlFbnVtLkhpZ2g6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFByaW9yaXR5RW51bS5NZWRpdW07XG4gICAgICAgICAgICBjYXNlIFByaW9yaXR5RW51bS5NZWRpdW06XG4gICAgICAgICAgICAgICAgcmV0dXJuIFByaW9yaXR5RW51bS5Mb3c7XG4gICAgICAgICAgICBjYXNlIFByaW9yaXR5RW51bS5Mb3c6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBleHBvcnQgZnVuY3Rpb24gZ2V0SW5kaWNhdG9yQ2xhc3MocHJpb3JpdHk6IFByaW9yaXR5RW51bSk6IHN0cmluZyB7XG4gICAgICAgIHN3aXRjaCAocHJpb3JpdHkpIHtcbiAgICAgICAgICAgIGNhc2UgUHJpb3JpdHlFbnVtLkNyaXRpY2FsOlxuICAgICAgICAgICAgICAgIHJldHVybiAnaW5kaWNhdG9yLXByaW9yaXR5IGNyaXRpY2FsJztcbiAgICAgICAgICAgIGNhc2UgUHJpb3JpdHlFbnVtLkhpZ2g6XG4gICAgICAgICAgICAgICAgcmV0dXJuICdpbmRpY2F0b3ItcHJpb3JpdHkgaGlnaCc7XG4gICAgICAgICAgICBjYXNlIFByaW9yaXR5RW51bS5NZWRpdW06XG4gICAgICAgICAgICAgICAgcmV0dXJuICdpbmRpY2F0b3ItcHJpb3JpdHkgbWVkaXVtJztcbiAgICAgICAgICAgIGNhc2UgUHJpb3JpdHlFbnVtLkxvdzpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2luZGljYXRvci1wcmlvcml0eSBsb3cnO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBlbnVtIFN0YXR1c0VudW0ge1xuICAgIFN1Ym1pdHRlZCA9IDEsXG4gICAgT3BlbiA9IDIsXG4gICAgQ2xvc2VkID0gMyxcbiAgICBSZU9wZW5lZCA9IDRcbn1cbiJdfQ==