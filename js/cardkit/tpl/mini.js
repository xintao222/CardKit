define([], function(){

    return {"template":"\n<article>\n\n    {% if (data.hd) { %}\n    <header>\n        {% if (data.hd_url) { %}\n        <a href=\"{%= data.hd_url %}\" class=\"ck-link\">{%= data.hd %}</a>\n        {% } else { %}\n        <span>{%= data.hd %}</span>\n        {% } %}\n    </header>\n    {% } %}\n\n    {% if (data.style === 'slide') { %}\n    <div class=\"ck-slide\"><div class=\"ck-inslide\">\n    {% } %}\n\n        {% data.items.forEach(function(item){ %}\n        <div class=\"ck-item\">\n            {% if (item.title) { %}\n            <p class=\"ck-title\">{%= item.title %}</p>\n            {% } %}\n            <div class=\"ck-content\">\n                {%= item.content.join('') %}\n                {% if (item.info) { %}\n                <span class=\"ck-info\">{%= item.info %}</span>\n                {% } %}\n            </div>\n            {% if (item.author) { %}\n\n            <p class=\"ck-initem\">\n                {% if (item.icon) { %}\n                <img src=\"{%= item.icon %}\" class=\"ck-icon\"/>\n                {% } %}\n                {% if (item.author_url) { %}\n                <a href=\"{%= item.author_url %}\" class=\"ck-author ck-link\">{%= item.author %}</a>\n                {% } else if (item.author) { %}\n                <span class=\"ck-author\">{%= item.author %}</span>\n                {% } %}\n                {% if (item.subtitle) { %}\n                <span class=\"ck-subtitle\">{%= item.subtitle %}</span>\n                {% } %}\n            </p>\n            {% if (item.meta && item.meta.length) { %}\n            <span class=\"ck-meta\">{%= item.meta.join('</span><span class=\"ck-meta\">') %}</span>\n            {% } %}\n\n            {% } %}\n        </div>\n        {% }); %}\n\n    {% if (data.style === 'slide') { %}\n    </div></div>\n    <footer>\n        {% if (data.items.length > 1) { %}\n        <div class=\"ck-page\">\n        {% data.items.forEach(function(){ %}\n            <span></span>\n        {% }); %}\n        </div>\n        {% } %}\n    </footer>\n    {% } %}\n\n</article>\n\n"}; 

});