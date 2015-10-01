var Calendario = function () {

    var calendario, tela, title, modalEvento, curso, chave;

    var init = function () {
        modalEvento = $('#modal-evento');
        calendario = $('#calendario');
        tela = $('input#codTela').val();
        curso = $('input#IdCurso').val();
        chave = $('input#Chave').val();
        listar();

        $(modalEvento).on('hidden.bs.modal', function (e) {
            modalEvento.find('.modal-title, .modal-body').html('');
            $(calendario).fullCalendar('refetchEvents');
            listar();
        })
    };

    var listar = function () {
        $(calendario).fullCalendar({
            header: {
                left: 'title',
                right: 'today month,agendaWeek,agendaDay prev,next'
            },
            firstDay: 0,
            timezone: 'America/Sao_Paulo',
            lang: 'pt-br',
            eventLimit: true,
            selectable: true,
            allDaySlot: false,
            weekends: true,
            timeFormat: 'HH:mm',
            slotLabelInterval: '00:30:00',
            slotLabelFormat:'HH:mm',
            minTime: "08:00:00",
            maxTime: "20:00:00",
            slotDuration: "00:30:00",
            eventSources: [{
                url: '../Listar',
                type: 'POST',
                data: {
                    tela: tela
                }/*,
                error: function () {
                    alert('Ocorreu algum erro ao listar a agenda!');
                }*/
            }],
            loading: function (isLoading, view) {
                var tab = $('.nav li.active a');
                if (isLoading) {
                    title = $(tab).html();
                    $(tab).html('Carregando...');
                } else {
                    $(tab).html(title);
                }
            },
            dayClick: function (date, jsEvent, view) {
                if (view.name == 'month' || view.name == 'agendaWeek') {
                    $(calendario).fullCalendar('changeView', 'agendaDay');
                    $(calendario).fullCalendar('gotoDate', date);
                }
            }
        });
    };

    var evento = function (codigo) {
        $.ajax({
            url: '../Evento/' + codigo,
            type: 'post',
            success: function (data) {
                var conteudo = '<b>Início: </b>' + data[0].start + '<br>'
                             + '<b>Término: </b>' + data[0].end + '<br>'
                             + '<b>Observação: </b>' + data[0].observacao
                             + '<div class="row">' +
					                '<div class="col-xs-12">' +
						                '<button class="btn btn-danger btn-sm pull-right" onclick="Calendario.excluir(' + data[0].id + ')"><span class="glyphicon glyphicon-trash"></span> Excluir</button>' +
					                '</div>' +
				                '</div>';
                modalEvento.find('.modal-title').html(data[0].title);
                modalEvento.find('.modal-body').html(conteudo);
                modalEvento.modal();
            }/*,
                error: function () {
                    alert('Ocorreu algum erro ao listar a agenda!');
                }*/
        });
    };

    var excluir = function (codigo) {
        if (confirm('Tem certeza que deseja excluir este evento?')) {
            $.ajax({
                url: '../Excluir/' + codigo,
                type: 'get',
                success: function (data) {
                    modalEvento.modal('hide');
                }/*,
                error: function () {
                    alert('Ocorreu algum erro ao listar a agenda!');
                }*/
            });
        }
    };

    var novo = function () {
        var conteudo = '<iframe width="100%" height="360px" scrolling="no" frameborder="0" src="http://www.feevale.br/formularios/formulario/AjustaSessao?IdCurso=' + curso + '&Chave=' + chave + '"></iframe>'
        modalEvento.find('.modal-title').html('Novo Evento');
        modalEvento.find('.modal-body').html(conteudo);
        modalEvento.modal();
    };

    return {
        init: function () {
            init();
        },
        evento: function (a) {
            evento(a);
        },
        novo: function () {
            novo();
        },
        excluir: function (a) {
            excluir(a);
        }
    };
}();