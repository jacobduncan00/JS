let jane = {
  name: 'Jane',
  friends: [ 'Tarzan', 'Cheeta' ],
  logHiToFriends: function () {
      'use strict';
      // let holder = this;
      // for each is essentially a for loop with friends.length
      this.friends.forEach(function (friend) {
          // `this` is undefined here
          // we must use a holder OR we can pass a second 
          // parameter to forEach, which would be this
          // console.log(holder.name+' says hi to '+friend);
          console.log(this.name+' says hi to '+friend);
      }, this);
  }
}

jane.logHiToFriends();