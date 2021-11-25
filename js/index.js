window.addEventListener("DOMContentLoaded", () => {
    try {
        // Календарь
        function calendar(id, year, month) {
            var Dlast = new Date(year, month + 1, 0).getDate(),
                D = new Date(year, month, Dlast),
                DNlast = new Date(D.getFullYear(), D.getMonth(), Dlast).getDay(),
                DNfirst = new Date(D.getFullYear(), D.getMonth(), 1).getDay(),
                calendar = '<tr>',
                month = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
            if (DNfirst != 0) {
                for (var i = 1; i < DNfirst; i++) calendar += '<td>';
            } else {
                for (var i = 0; i < 6; i++) calendar += '<td>';
            }
            for (var i = 1; i <= Dlast; i++) {
                if (i == new Date().getDate() && D.getFullYear() == new Date().getFullYear() && D.getMonth() == new Date().getMonth()) {
                    calendar += '<td class="today">' + i;
                } else {
                    calendar += '<td>' + i;
                }
                if (new Date(D.getFullYear(), D.getMonth(), i).getDay() == 0) {
                    calendar += '<tr>';
                }
            }
            for (var i = DNlast; i < 7; i++) calendar += '<td> ';
            document.querySelector('#' + id + ' tbody').innerHTML = calendar;
            document.querySelector('#' + id + ' thead td:nth-child(2)').innerHTML = month[D.getMonth()] + ' ' + D.getFullYear();
            document.querySelector('#' + id + ' thead td:nth-child(2)').dataset.month = D.getMonth();
            document.querySelector('#' + id + ' thead td:nth-child(2)').dataset.year = D.getFullYear();
            if (document.querySelectorAll('#' + id + ' tbody tr').length < 6) {
                // чтобы при перелистывании месяцев не "подпрыгивала" вся страница, добавляется ряд пустых клеток. Итог: всегда 6 строк для цифр
                document.querySelector('#' + id + ' tbody').innerHTML += '<tr><td> <td> <td> <td> <td> <td> <td> ';
            }
        }
        calendar("calendar", new Date().getFullYear(), new Date().getMonth());
        // переключатель минус месяц
        document.querySelector('#calendar thead tr:nth-child(1) td:nth-child(1)').onclick = function () {
            calendar("calendar", document.querySelector('#calendar thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar thead td:nth-child(2)').dataset.month) - 1);
        }
        // переключатель плюс месяц
        document.querySelector('#calendar thead tr:nth-child(1) td:nth-child(3)').onclick = function () {
            calendar("calendar", document.querySelector('#calendar thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar thead td:nth-child(2)').dataset.month) + 1);
        }


        $(document).ready(function () {
            // swipebox for gallery
            $('.swipebox').swipebox({
                useCSS: true,
                useSVG: true,
                initialIndexOnArray: 0,
                hideCloseButtonOnMobile: false,
                removeBarsOnMobile: true,
                hideBarsDelay: 3000,
                videoMaxWidth: 1140,
                beforeOpen: function () { },
                afterOpen: null,
                afterClose: function () { },
            });
        })
    } catch (error) {
        console.dir(error)
    }
})

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.querySelector(".navbar");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}


