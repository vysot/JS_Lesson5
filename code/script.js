// Создать объект "Документ", в котором определить свойства "Заголовок, тело, футер, дата". 
// Создать в объекте вложенный объект - "Приложение". Создать в объекте "Приложение", 
// вложенные объекты, "Заголовок, тело, футер, дата". 
// Создать методы для заполнения и отображения документа.
let documentMy = {
    header: "",
    body: "",
    footer: "",
    date: "",
    application: {
        header: {headerApp: ""},
        body: {bodyApp: ""},
        footer: {footerApp: ""},
        date: {dateApp: ""},
    },

    show: function () {
        document.write("Main document: " + "<br/>"+ "<br/>" + 
        "Header: " + `${this.header}` + "<br/>");
        document.write("Body: " + "<br/>" + `${this.body}` + "<br/>");
        document.write("Footer: " + `${this.footer}` + "<br/>");
        document.write("Date: " + `${this.date}` + "<br/>" + "<hr/>");
        document.write("Application: " + "<br/>" + "<br/>" + 
        "Header: " + `${this.application.header.headerApp}` + "<br/>");
        document.write("Body: " + "<br/>" + `${this.application.body.bodyApp}` + "<br/>");
        document.write("Footer: " + `${this.application.footer.footerApp}` + "<br/>");
        document.write("Date: " + `${this.application.date.dateApp}` + "<br/>");
    },
    changeWork: function (header, body, footer, date,
        headerApp, bodyApp, footerApp, dateApp) {
        this.header = header;
        this.body = body;
        this.footer = footer;
        this.date = date;
        this.application.header.headerApp = headerApp;
        this.application.body.bodyApp = bodyApp;
        this.application.footer.footerApp = footerApp;
        this.application.date.dateApp = dateApp;
    },
  
};
documentMy.changeWork("Основы JavaScript", "<img src = 'https://www.kverner.ru/wp-content/uploads/2020/02/luchii-javascript-kursi.png'>",
    "Portions of this content are ©1998–2022", "Last modified: 29 сент. 2022 г..", 
    "Пример 'hello world'", "<img src = 'https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics/hello-world.png'>",
     "Portions of this content are ©1998–2022", "Last modified: 29 сент. 2022 г..");
documentMy.show();


