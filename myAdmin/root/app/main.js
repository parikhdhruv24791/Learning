  $.ajax({
          method: "GET",
          url: "http://192.168.225.158:3000/getNews"
      })
      .done(function(msg) {
          console.log("Data Saved: " + msg.list);
          var news = "";
          var data = msg.list;
          for (var i = 0; i < msg.list.length; i++) {
              news +='<div class="mdl-cell mdl-cell--3-col"><div class="demo-card-square mdl-card mdl-shadow--2dp"><div class="mdl-card__title mdl-card--expand" style = "height: 176px;background: url("'+data[i].img+'");"><h2 class="mdl-card__title-text">Update</h2></div><div class="mdl-card__supporting-text">'+data[i].title+'</div><div class="mdl-card__actions mdl-card--border"><a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" href='+data[i].href+'>View Updates</a></div></div></div>'
          }
          $("#newsContent").html(news);
          console.log("Data Saved: " + msg.list);
      });

