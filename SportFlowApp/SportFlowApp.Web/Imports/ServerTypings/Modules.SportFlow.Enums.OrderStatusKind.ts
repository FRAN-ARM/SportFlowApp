namespace SportFlowApp.Modules.SportFlow.Enums {
    export enum OrderStatusKind {
        Pending = 0,
        Canceled = 1,
        Completed = 2
    }
    Serenity.Decorators.registerEnumType(OrderStatusKind, 'SportFlowApp.Modules.SportFlow.Enums.OrderStatusKind', 'SportFlow.OrderStatusKind');
}

