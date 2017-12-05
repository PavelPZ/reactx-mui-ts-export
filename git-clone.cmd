d:
cd d:\temp

rmdir material-ui /s /q

call git clone -b v1-beta --single-branch https://github.com/mui-org/material-ui.git

cd d:\temp\material-ui

rename src material-ui

cd d:\temp\material-ui\material-ui

del *.js /s /q
del *.spec.* /s /q

rmdir D:\rw\pavelpz\reactx-mui-ts-export\material-ui /s /q

cd ..

move d:\temp\material-ui\material-ui D:\rw\pavelpz\reactx-mui-ts-export\material-ui

rmdir material-ui /s /q

call generate.cmd