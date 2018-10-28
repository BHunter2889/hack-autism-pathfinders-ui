--tables we don't need:
-- docs (drive file names can be gotten from drive)
-- printeableDocs (these are just a bunch of drive files concatenated together)
-- events (these reside in the calendar, not the db)
-- team (this is just a collection of all teamMembers)

-- should map to /forms
CREATE TABLE form_template (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  category TEXT NOT NULL
);
INSERT INTO form_template (title,category) VALUES ('Home Information','Personal');
INSERT INTO form_template (title,category) VALUES ('Maintenance Call','Personal');
INSERT INTO form_template (title,category) VALUES ('Utilities','Personal');
INSERT INTO form_template (title,category) VALUES ('Utility Emergency','Personal');
INSERT INTO form_template (title,category) VALUES ('What If','What If');
INSERT INTO form_template (title,category) VALUES ('Medical Insurance','Medical');
INSERT INTO form_template (title,category) VALUES ('Support Team Member','Social');
INSERT INTO form_template (title,category) VALUES ('Communications Log','Social');
INSERT INTO form_template (title,category) VALUES ('Transportation Planner','Social');
INSERT INTO form_template (title,category) VALUES ('Release of Information Form','Medical');
INSERT INTO form_template (title,category) VALUES ('Budget Interactive','Personal');
INSERT INTO form_template (title,category) VALUES ('Medical Appointments','Medical');
INSERT INTO form_template (title,category) VALUES ('My Employment','Social');
INSERT INTO form_template (title,category) VALUES ('Medication Records','Medical');
INSERT INTO form_template (title,category) VALUES ('Medication Details','Medical');
INSERT INTO form_template (title,category) VALUES ('Daily Medication List','Medical');

--should map to /form
CREATE TABLE form (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  form_template_id INTEGER NOT NULL,
  data TEXT NOT NULL, --this is where the form data goes as a stringified json object
  FOREIGN KEY(form_template_id) REFERENCES form_template(id)
);

-- this is now handled by form's data column and validated/organized by formSchemas/supportTeamMember.json
---- should map to /teamMember, /team
--CREATE TABLE supportTeamMember (
--  id INTEGER PRIMARY KEY AUTOINCREMENT,
--  description TEXT,
--  name TEXT NOT NULL,
--  agency_name TEXT,
--  agency_type_id INTEGER,
--  agency_type_other TEXT,
--  agency_phone_number TEXT,
--  agency_office_hours TEXT,
--  agency_address TEXT,
--  transportation TEXT,
--  isp_due_by TEXT,
--  invited_case_manager_on INTEGER,
--  email TEXT,
--  submit_by_email BOOLEAN,
--  address TEXT,
--  submit_by_mail BOOLEAN,
--  fax TEXT,
--  submit_by_fax BOOLEAN,
--  referred_by TEXT,
--  notes TEXT,
--  img_url TEXT,
--  FOREIGN KEY(agency_type_id) REFERENCES agencyType(id)
--);
--
--CREATE TABLE agencyType (
--  id INTEGER PRIMARY KEY AUTOINCREMENT,
--  name TEXT NOT NULL
--);
--INSERT INTO agencyType (name) VALUES ('JOB TRAINING');
--INSERT INTO agencyType (name) VALUES ('SSI');
--INSERT INTO agencyType (name) VALUES ('CAMP');
--INSERT INTO agencyType (name) VALUES ('LIFE SKILLS TRAINING');
--INSERT INTO agencyType (name) VALUES ('MEDICAID/ACA');
--INSERT INTO agencyType (name) VALUES ('DAY PROGRAM');
--INSERT INTO agencyType (name) VALUES ('HOUSING');
--INSERT INTO agencyType (name) VALUES ('SOCIAL ACTIVITIES');
--INSERT INTO agencyType (name) VALUES ('OTHER');