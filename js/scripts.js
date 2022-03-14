//Welcome Message
(function() {
    var data = [
        {
            name: 'autoclose-html-plus',
            description:'autoclose-html-plus is the number three code snippet tool.',
            author: 'binaryfunt',
            url: 'https://atom.io/packages/autoclose-html-plus',
            downloads: 162608,
            stars: 12,
            price: 12.60,
            selector: 'p1'
        },
        {
            name: 'git-blame',
            description:'git-blame haves less stars in git intergration.',
            author: 'alexcorre',
            url: 'https://atom.io/packages/git-blame',
            downloads: 291701,
            stars: 458,
            price: 8.87,
            selector: 'p2'
        }
    ];
    
    //(Atom) Package constructor function
    function Package(data){
        this.name = data.name;
        this.description = data.description;
        this.author = data.author;
        this.url = data.url;
        this.downloads = data.downloads;
        this.stars = data.stars;
        this.selector = data.selector;
    
        this.getFormattedDownloads = function(){
            return this.downloads.toLocaleString();
        };
    
        this.getFormattedStars = function(){
            return this.stars.toLocaleString();
        };
    }  
        var getTodaysDate = function(){
            var today = new Date();
            return today.toDateString();
        };
    
        var getEl = function(id){
            return document.getElementById(id);
        }

        var writePackageIinfo =function(package){
            var selector = package.selector,
                nameEl = getEl(selector + '-name'),
                descEl = getEl(selector + '-description'),
                authEl = getEl(selector + '-author'),
                downloadEl = getEl(selector + '-downloads'),
                starsEl = getEl(selector + '-stars');

                nameEl.textContent = package.name;
                descEl.textContent = package.description;
                authEl.textContent = package.author;
                downloadEl.textContent = package.getFormattedDownloads();
                starsEl.textContent = package.getFormattedStars();

        }

        dateEl = getEl('date');
        dateEl.textContent = getTodaysDate();

        var autoclose = new Package(data[0]);
        writePackageIinfo(autoclose);

        var git = new Package(data[1]);
        writePackageIinfo(git);
}());
