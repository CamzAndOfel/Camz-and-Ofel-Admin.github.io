var app = new function() {

    this.el = document.getElementById('time');

    this.time = [];

    this.Count = function(data) {
        var el = document.getElementById('counter');
        var name = 'available';

        if (data) {
            if (data > 1) {
                name = 'available';
            }
            el.innerHTML = data + ' ' + name;
        } else {
            el.innerHTML = 'No ' + name;
        }
    };

    this.FetchAll = function() {
        var data = '';

        if (this.time.length > 0) {
            for (i = 0; i < this.time.length; i++) {
                data += '<tr>';
                data += '<td>' + this.time[i] + '</td>';
                data += '<td><button class="btn btn-warning"  onclick="app.Edit(' + i + ')">Edit</button></td>';
                data += '<td><button class="btn btn-danger" onclick="app.Delete(' + i + ')">Delete</button></td>';
                data += '</tr>';
            }
        }

        this.Count(this.time.length);
        return this.el.innerHTML = data;
    };

    this.Add = function() {
        el = document.getElementById('add-name');
        var country = el.value;

        if (country) {
            this.time.push(country.trim());
            el.value = '';
            this.FetchAll();
        }
    };

    this.Edit = function(item) {
        var el = document.getElementById('edit-name');
        el.value = this.time[item];
        document.getElementById('spoiler').style.display = 'block';
        self = this;

        document.getElementById('saveEdit').onsubmit = function() {
            var country = el.value;

            if (country) {
                self.time.splice(item, 1, country.trim());
                self.FetchAll();
                CloseInput();
            }
        }
    };

    this.Delete = function(item) {
        this.time.splice(item, 1);
        this.FetchAll();
    };

}

app.FetchAll();

function CloseInput() {
    document.getElementById('spoiler').style.display = 'none';
}