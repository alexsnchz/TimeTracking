/*! jQuery Validation Plugin - v1.13.0 - 7/1/2014
 * http://jqueryvalidation.org/
 * Copyright (c) 2014 Jörn Zaefferer; Licensed MIT */

!function(a){"function"==typeof define&&define.amd?define(["jquery","../jquery.validate.min"],a):a(jQuery)}(function(a){a.extend(a.validator.messages,{required:"このフィールドは必須です。",remote:"このフィールドを修正してください。",email:"有効なEメールアドレスを入力してください。",url:"有効なURLを入力してください。",date:"有効な日付を入力してください。",dateISO:"有効な日付（ISO）を入力してください。",number:"有効な数字を入力してください。",digits:"数字のみを入力してください。",creditcard:"有効なクレジットカード番号を入力してください。",equalTo:"同じ値をもう一度入力してください。",extension:"有効な拡張子を含む値を入力してください。",maxlength:a.validator.format("{0} 文字以内で入力してください。"),minlength:a.validator.format("{0} 文字以上で入力してください。"),rangelength:a.validator.format("{0} 文字から {1} 文字までの値を入力してください。"),range:a.validator.format("{0} から {1} までの値を入力してください。"),max:a.validator.format("{0} 以下の値を入力してください。"),min:a.validator.format("{0} 以上の値を入力してください。")})});
