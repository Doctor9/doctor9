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
                else if (view.name == 'agendaDay') {
                    //alert(date);

                    var txt = date;
                    var newDt = new Date();

                    var re1 = '.*?';
                    var re2 = '(?:[a-z][a-z0-9_]*)';
                    var re3 = '.*?';
                    var re4 = '((?:[a-z][a-z0-9_]*))';
                    var re5 = '.*?';
                    var re6 = '((?:(?:[0-2]?\\d{1})|(?:[3][01]{1})))(?![\\d])';
                    var re7 = '.*?';
                    var re8 = '((?:(?:[1]{1}\\d{1}\\d{1}\\d{1})|(?:[2]{1}\\d{3})))(?![\\d])';
                    var re9 = '.*?';
                    var re10 = '((?:(?:[0-1][0-9])|(?:[2][0-3])|(?:[0-9])):(?:[0-5][0-9])(?::[0-5][0-9])?(?:\\s?(?:am|AM|pm|PM))?)';

                    var p = new RegExp(re1 + re2 + re3 + re4 + re5 + re6 + re7 + re8 + re9 + re10, ["i"]);
                    var m = p.exec(txt);
                    if (m != null) {
                        var mon1 = m[1];
                        var day1 = m[2];
                        var year1 = m[3];
                        var time1 = m[4];

                        switch (mon1) {
                            case 'Jan':
                                mon1 = "01";
                                break;
                            case 'Fev':
                                mon1 = "02";
                                break;
                            case 'Mar':
                                mon1 = "03";
                                break;
                            case 'Abr':
                                mon1 = "04";
                                break;
                            case 'Mai':
                                mon1 = "05";
                                break;
                            case 'Jun':
                                mon1 = "06";
                                break;
                            case 'Jul':
                                mon1 = "07";
                                break;
                            case 'Ago':
                                mon1 = "08";
                                break;
                            case 'Set':
                                mon1 = "09";
                                break;
                            case 'Out':
                                mon1 = "10";
                                break;
                            case 'Nov':
                                mon1 = "11";
                                break;
                            case 'Dez':
                                mon1 = "12";
                                break;
                        }

                        var dia = m[2] + "/" + mon1 + "/" + m[3];
                    }

                    var dt2 = p.exec(newDt);
                    if (dt2 != null) {

                        var mes2 = dt2[1];

                        switch (mes2) {
                            case 'Jan':
                                mes2 = "01";
                                break;
                            case 'Feb':
                                mes2 = "02";
                                break;
                            case 'Mar':
                                mes2 = "03";
                                break;
                            case 'Apr':
                                mes2 = "04";
                                break;
                            case 'May':
                                mes2 = "05";
                                break;
                            case 'Jun':
                                mes2 = "06";
                                break;
                            case 'Jul':
                                mes2 = "07";
                                break;
                            case 'Aug':
                                mes2 = "08";
                                break;
                            case 'Sep':
                                mes2 = "09";
                                break;
                            case 'Oct':
                                mes2 = "10";
                                break;
                            case 'Nov':
                                mes2 = "11";
                                break;
                            case 'Dec':
                                mes2 = "12";
                                break;
                        }

                        var dt2n = dt2[2] + "/" + mes2 + "/" + dt2[3];
                    }
                    
                    
                    var hojee = dt2n.split('/');
                    var dhojee = parseInt(hojee[0], 10);
                    var mhojee = parseInt(hojee[1], 10);
                    var yhojee = parseInt(hojee[2], 10);
                    var diaAgend = dia.split('/');
                    var ddiaAgend = parseInt(diaAgend[0], 10);
                    var mdiaAgend = parseInt(diaAgend[1], 10);
                    var ydiaAgend = parseInt(diaAgend[2], 10);

                   //if (ddiaAgend > dhojee && mdiaAgend >= mhojee && ydiaAgend >= yhojee) {
                   //    //alert('ok');
                   //} else {
                   //    alert('Data para agendamento inválida!');
                   //    return false;
                    //}
                    if (ydiaAgend >= yhojee) {
                        if (mdiaAgend >= mhojee) {
                            if (mdiaAgend >= mhojee && ddiaAgend > dhojee) {
                                //ok
                            } else if (mdiaAgend > mhojee) {
                                //ok
                            } else {
                                alert('Data para agendamento inválida!');
                                return false;
                            }
                        } else {
                            alert('Data para agendamento inválida!');
                            return false;
                        }
                    } else {
                        alert('Data para agendamento inválida!');
                        return false;
                    }


                    $('#myModal').modal('show');
                    
                    var especialidade = $('#espec option:selected').text();
                    var medico = $('#medic option:selected').text();
                    
                    var valorProInput = {
                        'diaAgenda': dia,
                        'hrAgenda': time1,
                        'idEspecAgenda': especialidade,
                        'idMedicAgenda': medico,
                        'HjAgenda': dt2n
                    };
                    $('#dadosAgendamento').find('input').val(function (index, value) {
                        return valorProInput[this.id];
                    });
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