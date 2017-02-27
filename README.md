# Chosen Readonly
<a href='https://ko-fi.com/A5071NK' target='_blank'><img height='32' style='border:0px;height:32px;' src='https://az743702.vo.msecnd.net/cdn/kofi1.png?v=a' border='0' alt='Buy Me a Coffee' /></a> 

Chosen Readonly is a plugin that enables the support of the readonly attribute for chosen selects.

# Install

#### Yarn, NPM, or Bower
```
yarn add chosen-readonly

npm install chosen-readonly

bower install chosen-readonly
```

#### Rails
```ruby
# Gemfile
source 'https://rails-assets.org' do
  gem 'rails-assets-chosen-readonly'
end


# app/assets/javascripts/application.js
/*
 *= require chosen
 *= require chosen-readonly
*/
```

# Usage
```javascript
/* Makes elements readonly if they already have the readonly attribute */
$('select').chosen().chosenReadonly();

/* Sets all elements as readonly */
$('select').chosen().chosenReadonly(true);

/* Remove readonly from all elements */
$('select').chosen().chosenReadonly(false);

/* Anytime you want to trigger the readonly check just run */
$('select').trigger('chosen:updated');
```


# Credits
Created by Weston Ganger - @westonganger

Plugin based off off [this jsFiddle](http://jsfiddle.net/eirc/v2es7L8o/) by @eirc
