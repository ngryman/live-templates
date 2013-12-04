# live templates

A collection of handy JavaScript live templates I use with IntelliJ / WebStorm.

## Import - the soft way

- Download [live-templates.jar](live-templates.jar).
- Go to file -> Import Settings...
- Import the file.

## Import - the hard way

 - Go to settings.
 - Search for live templates.
 - Under the javascript section you should be able to manage your templates.
 - For each template in [live-templates.js](live-templates.js):
   - Create new template.
   - Fill **abbrevation** with the `@abbr` value.
   - Fill **description** with the `@desc` value.
   - Copy / paste the code.
   - Click on edit variables.
   - For each variable:
     - Fill **expression** with the `{}` value of the `@param`.
     - Fill **default value** with the `[]` value of the `@param`.
