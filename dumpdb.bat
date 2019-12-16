@echo off
set /p dbname="dbname >"
set /p host="host >"
set /p port="port >"
set /p username="username >"

set /p filename="specify filename >"

pg_dump --dbname=%dbname% --host=%host% --port=%port% --username=%username% --file=%filename% --verbose --clean --no-owner --schema-only --no-privileges --if-exists

@echo on