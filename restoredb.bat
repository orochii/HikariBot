@echo off
set "dbname=runon_dev"
set "username=postgres"
set "port=5432"
set "host=localhost"

set /p file="Dump filename >"

echo Restoring database from %file%...
echo .

psql --dbname=%dbname% --file=%file% --echo-all --echo-errors --host=%host% --port=%port% --username=%username%

@echo on