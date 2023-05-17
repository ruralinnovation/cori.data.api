CREATE ROLE read_only_access;
GRANT CONNECT ON DATABASE data to read_only_access;
GRANT USAGE ON SCHEMA 
    public,
	acs,
    bcat
	TO read_only_access;
-- 	ascendium,
-- 	canada,
-- 	core_data,
-- 	cori_model,
-- 	eda,
-- 	employment_data,
-- 	location_analysis,
-- 	metadata,
-- 	opensourcecompass,
-- 	rii_analysis,
-- 	rii_diagnostic,
-- 	rwjf,
-- 	sch_analysis,
-- 	sch_broadband,
-- 	sch_census_tiger,
-- 	sch_layer,
-- 	sch_source,
-- 	tiger,
-- 	tiger_data,
-- 	tn_broadband,
-- 	topology,
-- 	vt_broadband 

GRANT SELECT ON ALL TABLES IN SCHEMA 
	public,
	acs,
    bcat
	TO read_only_access;
-- 	ascendium,
-- 	canada,
-- 	core_data,
-- 	cori_model,
-- 	eda,
-- 	employment_data,
-- 	location_analysis,
-- 	metadata,
-- 	opensourcecompass,
-- 	rii_analysis,
-- 	rii_diagnostic,
-- 	rwjf,
-- 	sch_analysis,
-- 	sch_broadband,
-- 	sch_census_tiger,
-- 	sch_layer,
-- 	sch_source,
-- 	tiger,
-- 	tiger_data,
-- 	tn_broadband,
-- 	topology,
-- 	vt_broadband 

-- CREATE USER read_only_user WITH PASSWORD '';
-- GRANT read_only_access TO read_only_user;