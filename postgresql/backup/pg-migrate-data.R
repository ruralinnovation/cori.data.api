## Dump schema from cori-risi "data" db ------------------------------------------

yyyy_mm_dd <- Sys.Date()
db_host <- "cori-risi.c6zaibvi9wyg.us-east-1.rds.amazonaws.com"
db_port <- "5432"
db_user <- Sys.getenv("DB_USER")
db_pwd <- Sys.getenv("DB_PWD")
db_role <- "admin@AWS.RURALINNOVATION.US"
db_database <- "data"

# db_schema <- "bcat"
# db_schema <- "sch_broadband"
# db_schema <- "sch_proj_climate"
db_schema <- "metadata"

Sys.setenv(PGPASSWORD=db_pwd)

# setwd("postgresql/backup")

pg_dump_cmd <- sprintf(
    'pg_dump --file "%s" --host "%s" --port "%s" --username "%s" --verbose --role "%s" --format=c --no-owner --section=pre-data --section=data --section=post-data --no-privileges --encoding "UTF8" --schema "%s" "%s"',
    paste0(db_schema, "-", yyyy_mm_dd, ".backup"),
    db_host,
    db_port,
    db_user,
    db_role,
    db_schema,
    db_database
)

cat(pg_dump_cmd)

system(pg_dump_cmd)


# install.packages("RPostgreSQL")
library(RPostgreSQL)

db_host <- "cori-risi-ad-postgresql.c6zaibvi9wyg.us-east-1.rds.amazonaws.com"
db_port <- "5432"
db_user <- "jhall@AWS.RURALINNOVATION.US"

olddrv <- dbDriver('PostgreSQL')
conn = dbConnect(
    drv = olddrv,
    dbname = db_database,
    host = db_host,
    port = as.numeric(db_port),
    user = db_user
)

conn


# ## Restore bcat schema to cori-risi-ad-postgresql "data-dev" db ----------------
# # -- Database: data-dev
# #
# # -- DROP DATABASE IF EXISTS "data-dev";
# #
# # CREATE DATABASE "data-dev"
# # WITH
# # OWNER = "admin@AWS.RURALINNOVATION.US"
# # ENCODING = 'UTF8'
# # LC_COLLATE = 'en_US.UTF-8'
# # LC_CTYPE = 'en_US.UTF-8'
# # TABLESPACE = pg_default
# # CONNECTION LIMIT = -1;
# #
# # -- Enable PostGIS (as of 3.0 contains just geometry/geography)
# # CREATE EXTENSION postgis;
# # -- enable raster support (for 3+)
# # CREATE EXTENSION postgis_raster;
# # -- Enable Topology
# # CREATE EXTENSION postgis_topology;
# # -- Enable PostGIS Advanced 3D
# # -- and other geoprocessing algorithms
# # -- sfcgal not available with all distributions
# # CREATE EXTENSION postgis_sfcgal;
# # -- fuzzy matching needed for Tiger
# # CREATE EXTENSION fuzzystrmatch;
# # -- rule based standardizer
# # CREATE EXTENSION address_standardizer;
# # -- example rule data set
# # CREATE EXTENSION address_standardizer_data_us;
# # -- Enable US Tiger Geocoder
# # CREATE EXTENSION postgis_tiger_geocoder;
#
#
# # create_qry_result <- dbGetQuery(conn, "create table dummytable (dummyfield integer not null primary key)")
# # select_qry_result <- dbGetQuery(conn, "select * from dummytable")
# # dbsize_qry_result <- dbGetQuery(conn, "select pg_database_size('test')")
#
# # CREATE SCHEMA IF NOT EXISTS bcat AUTHORIZATION "admin@AWS.RURALINNOVATION.US";
#
# dbExecute(conn, sprintf(
#   'CREATE SCHEMA IF NOT EXISTS "%s" AUTHORIZATION "%s";',
#   db_schema,
#   db_role
#   )
# )
#
# dbDisconnect(conn)
#
# pg_restore_cmd <- sprintf(
#   'pg_restore --host "%s" --port "%s" --username "%s" --role "%s" --schema "%s" --dbname "%s" --clean --if-exists --single-transaction --verbose "%s"',
#   db_host,
#   db_port,
#   db_user,
#   db_role,
#   db_schema,
#   db_database,
#   paste0(db_schema, "-", yyyy_mm_dd, ".backup")
# )
# cat(pg_restore_cmd)
#
# system(pg_restore_cmd)
#
#
# ## Dump bcat schema from cori-risi-ad-postgresql "data-dev" db ------------------------------------------
#
# yyyy_mm_dd <- "2023-03-24"
# db_host <- "cori-risi-ad-postgresql.c6zaibvi9wyg.us-east-1.rds.amazonaws.com"
# db_port <- "5432"
# db_user <- "jhall@AWS.RURALINNOVATION.US"
# db_database <- "data-dev"
#
# Sys.setenv(PGPASSWORD=db_pwd)
#
# # setwd("postgresql/backup")
#
# pg_dump_cmd <- sprintf(
#   'pg_dump --file "%s" --host "%s" --port "%s" --username "%s" --verbose --role "%s" --format=c --no-owner --section=pre-data --section=data --section=post-data --no-privileges --encoding "UTF8" --schema "%s" "%s"',
#   paste0(db_schema, "-", yyyy_mm_dd, ".backup"),
#   db_host,
#   db_port,
#   db_user,
#   db_role,
#   db_schema,
#   db_database
# )
#
# cat(pg_dump_cmd)
#
# system(pg_dump_cmd)


## Restore bcat schema to cori-risi-ad-postgresql "data" db ----------------


# DELETE EXISTING SCHEMA
dbExecute(conn, sprintf(
  'DROP SCHEMA  "%s" CASCADE;',
  db_schema
))

# CREATE SCHEMA IF NOT EXISTS bcat AUTHORIZATION "admin@AWS.RURALINNOVATION.US";
dbExecute(conn, sprintf(
    'CREATE SCHEMA IF NOT EXISTS "%s" AUTHORIZATION "%s";',
    db_schema,
    db_role
))

dbDisconnect(conn)

db_database <- "data"

pg_restore_cmd <- sprintf(
    'pg_restore --host "%s" --port "%s" --username "%s" --role "%s" --schema "%s" --dbname "%s" --clean --if-exists --single-transaction --verbose "%s"',
    db_host,
    db_port,
    db_user,
    db_role,
    db_schema,
    db_database,
    paste0(db_schema, "-", yyyy_mm_dd, ".backup")
)
cat(pg_restore_cmd)

system(pg_restore_cmd)


olddrv <- dbDriver('PostgreSQL')
conn = dbConnect(
    drv = olddrv,
    dbname = db_database,
    host = db_host,
    port = as.numeric(db_port),
    user = db_user
)

conn

dbExecute(conn, '
GRANT USAGE ON SCHEMA
  public,
	acs,
  bcat,
  sch_broadband,
  sch_census_tiger,
  sch_proj_climate
	TO mda_read_all;
'
)

dbExecute(conn, '
GRANT SELECT ON ALL TABLES IN SCHEMA
	public,
	acs,
  bcat,
  sch_broadband,
  sch_census_tiger,
  sch_proj_climate
	TO mda_read_all;
'
)

dbExecute(conn, '
GRANT USAGE ON SCHEMA
  public,
	acs,
  bcat,
  sch_broadband,
  sch_census_tiger,
  sch_proj_climate
	TO read_only_access;
'
)

dbExecute(conn, '
GRANT SELECT ON ALL TABLES IN SCHEMA
	public,
	acs,
  bcat,
  sch_broadband,
  sch_census_tiger,
  sch_proj_climate
	TO read_only_access;
'
)

dbDisconnect(conn)
