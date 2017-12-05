d:
cd D:\rw\pavelpz\reactx-mui-ts-export

rem replace original dts-generator's D:\rw\pavelpz\reactx-mui-ts-export\node_modules\dts-generator\index.js file
copy D:\rw\pavelpz\reactx-mui-ts-export\node_modules$dts-generator$index.js D:\rw\pavelpz\reactx-mui-ts-export\node_modules\dts-generator\index.js

node dts-generator.js
