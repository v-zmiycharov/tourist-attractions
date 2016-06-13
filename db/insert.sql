USE [TouristAttractions]
GO

SET IDENTITY_INSERT [dbo].[Attractions] ON
GO

INSERT INTO [dbo].[Attractions] ([Attractionid],[Name],[Longitude],[Latitude],[City],[Country])
     VALUES(1, 'Eiffel Tower', 48.8583736, 2.2922926, 'Paris', 'France')
INSERT INTO [dbo].[Attractions] ([Attractionid],[Name],[Longitude],[Latitude],[City],[Country])
     VALUES(2, 'Colosseum', 41.8902142, 12.4900422, 'Rome', 'Italy')
INSERT INTO [dbo].[Attractions] ([Attractionid],[Name],[Longitude],[Latitude],[City],[Country])
     VALUES(3, 'Plitvice Lakes National Park', 44.8654004, 15.5798232, '', 'Croatia')
INSERT INTO [dbo].[Attractions] ([Attractionid],[Name],[Longitude],[Latitude],[City],[Country])
     VALUES(4, 'Burj Khalifa', 25.1972018,55.2721877, 'Dubai', 'UAE')
INSERT INTO [dbo].[Attractions] ([Attractionid],[Name],[Longitude],[Latitude],[City],[Country])
     VALUES(5, 'La Sagrada Familia', 41.4036339, 2.1721671, 'Barcelona', 'Spain')
INSERT INTO [dbo].[Attractions] ([Attractionid],[Name],[Longitude],[Latitude],[City],[Country])
     VALUES(6, 'Charles Bridge', 50.086441,14.4116764, 'Prague', 'Czech Republic')
INSERT INTO [dbo].[Attractions] ([Attractionid],[Name],[Longitude],[Latitude],[City],[Country])
     VALUES(7, 'Cologne Cathedral', 50.9412818, 6.9560927, 'Cologne', 'Germany')
INSERT INTO [dbo].[Attractions] ([Attractionid],[Name],[Longitude],[Latitude],[City],[Country])
     VALUES(8, 'Cathedral Saint Alexandar Nevski', 42.6961218,23.3292795, 'Sofia', 'Bulgaria')
INSERT INTO [dbo].[Attractions] ([Attractionid],[Name],[Longitude],[Latitude],[City],[Country])
     VALUES(9, 'Empire State Building', 40.7486946, -73.9903013, 'New York', 'USA')
INSERT INTO [dbo].[Attractions] ([Attractionid],[Name],[Longitude],[Latitude],[City],[Country])
     VALUES(10, 'Potala Palace', 29.6554988, 91.1163905, 'Tibet', 'China')
GO

SET IDENTITY_INSERT [dbo].[Attractions] OFF
GO


