var readParameters = function()
{
    console.log('Getting parameters..');
    let params = (new URL(location)).searchParams;
    console.log('Query parameters: ', params.toString());

    var html = '';
    params.forEach((value, key) => {
        if (value == "en" && key == "lang") {
            html = "Alquran Search does not collect any personal information from any of your use of our Apps. \nIf we have any of your personal information we will not willingly sell or give it to anyone, except if lawfully subpoenaed to produce it and then only after offering you a reasonable chance to challenge such subpoena if allowed by law";
        } else if (value == "id" && key == "lang") {
            html = "Alquran Search  tidak mengumpulkan informasi pribadi apapun dari perangkat anda. \nJika kami memiliki informasi mengenai anda kami tidak akan menjual atau membagikan kepada siapapun, kecuali kami telah menghubungi anda dan sesuai dengan ketentuan hukum";
        }
      });
      

    $("#1").html(html);
}
