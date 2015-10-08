(function (e) {
    "function" == typeof define && define.amd ? define(["jquery", "moment"], e) : e(jQuery, moment)
})(function (e, t) {
    (t.defineLocale || t.lang).call(t, "pt-br", {
        months: "Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"),
        monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
        weekdays: "Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split("_"),
        weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),
        weekdaysMin: "dom_2ª_3ª_4ª_5ª_6ª_sáb".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "LT:ss",
            L: "DD/MM/YYYY",
            LL: "D [de] MMMM [de] YYYY",
            LLL: "D [de] MMMM [de] YYYY [Ã s] LT",
            LLLL: "dddd, D [de] MMMM [de] YYYY [Ã s] LT"
        },
        calendar: {
            sameDay: "[Hoje Ã s] LT",
            nextDay: "[Amanhã Ã s] LT",
            nextWeek: "dddd [Ã s] LT",
            lastDay: "[Ontem Ã s] LT",
            lastWeek: function () {
                return 0 === this.day() || 6 === this.day() ? "[Último] dddd [Ã s] LT" : "[Última] dddd [Ã s] LT"
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "em %s",
            past: "%s atrás",
            s: "segundos",
            m: "um minuto",
            mm: "%d minutos",
            h: "uma hora",
            hh: "%d horas",
            d: "um dia",
            dd: "%d dias",
            M: "um mÃªs",
            MM: "%d meses",
            y: "um ano",
            yy: "%d anos"
        },
        ordinalParse: /\d{1,2}Âº/,
        ordinal: "%dÂº"
    }), e.fullCalendar.datepickerLang("pt-br", "pt-BR", {
        closeText: "Fechar",
        prevText: "&#x3C;Anterior",
        nextText: "PrÃ³ximo&#x3E;",
        currentText: "Hoje",
        monthNames: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
        monthNamesShort: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
        dayNames: ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"],
        dayNamesShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
        dayNamesMin: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
        weekHeader: "Sm",
        dateFormat: "dd/mm/yy",
        firstDay: 0,
        isRTL: !1,
        showMonthAfterYear: !1,
        yearSuffix: ""
    }), e.fullCalendar.lang("pt-br", {
        buttonText: {
            month: "Mês",
            week: "Semana",
            day: "Dia",
            list: "Compromissos"
        },
        allDayText: "Dia inteiro",
        eventLimitText: function (e) {
            if (e > 1) {
                return "mais " + e + " itens"
            } else {
                e + " item a mais"
            }
        }
    })
});