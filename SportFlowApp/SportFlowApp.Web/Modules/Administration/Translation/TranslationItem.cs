﻿

namespace SportFlowApp.Administration
{
    using Serenity.ComponentModel;

    [ScriptInclude]
    public class TranslationItem
    {
        public string Key { get; set; }
        public string SourceText { get; set; }
        public string TargetText { get; set; }
        public string CustomText { get; set; }
    }
}