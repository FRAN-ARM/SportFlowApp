using Serenity.ComponentModel;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Web;

namespace SportFlowApp.Modules.SportFlow.Enums
{
    [EnumKey("SportFlow.OrderStatusKind")]
    public enum OrderStatusKind
    {
        [Description("Pendiente")]
        Pending = 0,
        [Description("Cancelado")]
        Canceled = 1,
        [Description("Completado")] // Quizas seria conveniente que varie segun el idioma seleccionado por el usuario. Detalles.
        Completed = 2
    }
}
