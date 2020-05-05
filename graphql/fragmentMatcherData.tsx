
      export interface IntrospectionResultData {
        __schema: {
          types: {
            kind: string;
            name: string;
            possibleTypes: {
              name: string;
            }[];
          }[];
        };
      }
      const result: IntrospectionResultData = {
  "__schema": {
    "types": [
      {
        "kind": "INTERFACE",
        "name": "MangoNode",
        "possibleTypes": [
          {
            "name": "MangoViewer"
          },
          {
            "name": "NodeType"
          },
          {
            "name": "MangoCreativeWork"
          },
          {
            "name": "MangoProgramme"
          },
          {
            "name": "MangoBroadcastService"
          },
          {
            "name": "MangoAudioFile"
          },
          {
            "name": "MangoBannerContent"
          },
          {
            "name": "MangoBestOf"
          },
          {
            "name": "MangoBoard"
          },
          {
            "name": "MangoBroadcastEvent"
          },
          {
            "name": "MangoCaption"
          },
          {
            "name": "MangoClip"
          },
          {
            "name": "MangoContentInteraction"
          },
          {
            "name": "MangoElementContent"
          },
          {
            "name": "MangoEndUser"
          },
          {
            "name": "MangoExternalURL"
          },
          {
            "name": "MangoExtra"
          },
          {
            "name": "MangoFacebookAccount"
          },
          {
            "name": "MangoFile"
          },
          {
            "name": "MangoImage"
          },
          {
            "name": "MangoImageFile"
          },
          {
            "name": "MangoImageFileCrop"
          },
          {
            "name": "MangoImportLocator"
          },
          {
            "name": "MangoImportableThing"
          },
          {
            "name": "MangoItem"
          },
          {
            "name": "MangoLivestream"
          },
          {
            "name": "MangoLivestreamResource"
          },
          {
            "name": "MangoLocator"
          },
          {
            "name": "MangoMakingOf"
          },
          {
            "name": "MangoPerson"
          },
          {
            "name": "MangoPlaylist"
          },
          {
            "name": "MangoPublicationEvent"
          },
          {
            "name": "MangoSeason"
          },
          {
            "name": "MangoSection"
          },
          {
            "name": "MangoSectionTemplate"
          },
          {
            "name": "MangoSeries"
          },
          {
            "name": "MangoSocialMediaAccount"
          },
          {
            "name": "MangoSubscription"
          },
          {
            "name": "MangoSubtitle"
          },
          {
            "name": "MangoTeaserContent"
          },
          {
            "name": "MangoTimedTextFile"
          },
          {
            "name": "MangoTrackingInfo"
          },
          {
            "name": "MangoTrailer"
          },
          {
            "name": "MangoTwitterAccount"
          },
          {
            "name": "MangoUser"
          },
          {
            "name": "MangoVideoFile"
          },
          {
            "name": "MangoWebPage"
          },
          {
            "name": "MangoWebhook"
          },
          {
            "name": "MangoWritableThing"
          },
          {
            "name": "MangoAgeRestrictedThing"
          },
          {
            "name": "MangoAgent"
          },
          {
            "name": "MangoAudience"
          },
          {
            "name": "MangoAudioProfile"
          },
          {
            "name": "MangoAvailabilityCategory"
          },
          {
            "name": "MangoBroadcastRegion"
          },
          {
            "name": "MangoCategorization"
          },
          {
            "name": "MangoCategory"
          },
          {
            "name": "MangoCollation"
          },
          {
            "name": "MangoDeletableThing"
          },
          {
            "name": "MangoDepartment"
          },
          {
            "name": "MangoEmbeddableThing"
          },
          {
            "name": "MangoFormat"
          },
          {
            "name": "MangoGSEA"
          },
          {
            "name": "MangoGenre"
          },
          {
            "name": "MangoGeoZone"
          },
          {
            "name": "MangoGrouping"
          },
          {
            "name": "MangoLRA"
          },
          {
            "name": "MangoLinkableThing"
          },
          {
            "name": "MangoOrganization"
          },
          {
            "name": "MangoOrganizationalUnit"
          },
          {
            "name": "MangoProfile"
          },
          {
            "name": "MangoPublicationService"
          },
          {
            "name": "MangoPublishableThing"
          },
          {
            "name": "MangoReactionType"
          },
          {
            "name": "MangoShortlyAvailableThing"
          },
          {
            "name": "MangoStatus"
          },
          {
            "name": "MangoSubject"
          },
          {
            "name": "MangoSystem"
          },
          {
            "name": "MangoTag"
          },
          {
            "name": "MangoThingWithCanonicalUrl"
          },
          {
            "name": "MangoThingWithRelevancePeriod"
          },
          {
            "name": "MangoTrackableThing"
          },
          {
            "name": "MangoVersionedThing"
          },
          {
            "name": "MangoVideoProfile"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "MangoAudioFileInterface",
        "possibleTypes": [
          {
            "name": "MangoAudioFile"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "MangoGeoZoneInterface",
        "possibleTypes": [
          {
            "name": "MangoGeoZone"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "MangoAudioProfileInterface",
        "possibleTypes": [
          {
            "name": "MangoAudioProfile"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "MangoImportLocatorInterface",
        "possibleTypes": [
          {
            "name": "MangoImportLocator"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "MangoSystemInterface",
        "possibleTypes": [
          {
            "name": "MangoSystem"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "MangoAvailabilityCategoryInterface",
        "possibleTypes": [
          {
            "name": "MangoAvailabilityCategory"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "MangoBannerContentInterface",
        "possibleTypes": [
          {
            "name": "MangoBannerContent"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "MangoImageInterface",
        "possibleTypes": [
          {
            "name": "MangoImage"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "MangoAudienceInterface",
        "possibleTypes": [
          {
            "name": "MangoAudience"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "MangoCreativeWorkInterface",
        "possibleTypes": [
          {
            "name": "MangoCreativeWork"
          },
          {
            "name": "MangoProgramme"
          },
          {
            "name": "MangoBestOf"
          },
          {
            "name": "MangoBoard"
          },
          {
            "name": "MangoClip"
          },
          {
            "name": "MangoExtra"
          },
          {
            "name": "MangoImage"
          },
          {
            "name": "MangoItem"
          },
          {
            "name": "MangoMakingOf"
          },
          {
            "name": "MangoPlaylist"
          },
          {
            "name": "MangoSeason"
          },
          {
            "name": "MangoSeries"
          },
          {
            "name": "MangoTrailer"
          },
          {
            "name": "MangoWebPage"
          },
          {
            "name": "MangoGrouping"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "MangoAgentInterface",
        "possibleTypes": [
          {
            "name": "MangoBroadcastService"
          },
          {
            "name": "MangoEndUser"
          },
          {
            "name": "MangoPerson"
          },
          {
            "name": "MangoUser"
          },
          {
            "name": "MangoAgent"
          },
          {
            "name": "MangoDepartment"
          },
          {
            "name": "MangoGSEA"
          },
          {
            "name": "MangoLRA"
          },
          {
            "name": "MangoOrganization"
          },
          {
            "name": "MangoOrganizationalUnit"
          },
          {
            "name": "MangoPublicationService"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "MangoExternalURLInterface",
        "possibleTypes": [
          {
            "name": "MangoExternalURL"
          },
          {
            "name": "MangoFacebookAccount"
          },
          {
            "name": "MangoSocialMediaAccount"
          },
          {
            "name": "MangoTwitterAccount"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "MangoFacebookAccountInterface",
        "possibleTypes": [
          {
            "name": "MangoFacebookAccount"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "MangoTwitterAccountInterface",
        "possibleTypes": [
          {
            "name": "MangoTwitterAccount"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "MangoCategorizationInterface",
        "possibleTypes": [
          {
            "name": "MangoCreativeWork"
          },
          {
            "name": "MangoProgramme"
          },
          {
            "name": "MangoBestOf"
          },
          {
            "name": "MangoBoard"
          },
          {
            "name": "MangoClip"
          },
          {
            "name": "MangoExtra"
          },
          {
            "name": "MangoImage"
          },
          {
            "name": "MangoItem"
          },
          {
            "name": "MangoMakingOf"
          },
          {
            "name": "MangoPlaylist"
          },
          {
            "name": "MangoSeason"
          },
          {
            "name": "MangoSeries"
          },
          {
            "name": "MangoTrailer"
          },
          {
            "name": "MangoWebPage"
          },
          {
            "name": "MangoAudience"
          },
          {
            "name": "MangoCategorization"
          },
          {
            "name": "MangoCategory"
          },
          {
            "name": "MangoFormat"
          },
          {
            "name": "MangoGenre"
          },
          {
            "name": "MangoGrouping"
          },
          {
            "name": "MangoSubject"
          },
          {
            "name": "MangoTag"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "MangoCategoryInterface",
        "possibleTypes": [
          {
            "name": "MangoCategory"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "MangoFileInterface",
        "possibleTypes": [
          {
            "name": "MangoAudioFile"
          },
          {
            "name": "MangoFile"
          },
          {
            "name": "MangoImageFile"
          },
          {
            "name": "MangoLivestreamResource"
          },
          {
            "name": "MangoTimedTextFile"
          },
          {
            "name": "MangoVideoFile"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "MangoFormatInterface",
        "possibleTypes": [
          {
            "name": "MangoFormat"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "MangoGenreInterface",
        "possibleTypes": [
          {
            "name": "MangoGenre"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "MangoGroupingInterface",
        "possibleTypes": [
          {
            "name": "MangoProgramme"
          },
          {
            "name": "MangoPlaylist"
          },
          {
            "name": "MangoSeason"
          },
          {
            "name": "MangoSeries"
          },
          {
            "name": "MangoGrouping"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "MangoDepartmentInterface",
        "possibleTypes": [
          {
            "name": "MangoDepartment"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "MangoOrganizationInterface",
        "possibleTypes": [
          {
            "name": "MangoBroadcastService"
          },
          {
            "name": "MangoDepartment"
          },
          {
            "name": "MangoGSEA"
          },
          {
            "name": "MangoLRA"
          },
          {
            "name": "MangoOrganization"
          },
          {
            "name": "MangoOrganizationalUnit"
          },
          {
            "name": "MangoPublicationService"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "MangoPublicationEventInterface",
        "possibleTypes": [
          {
            "name": "MangoBroadcastEvent"
          },
          {
            "name": "MangoPublicationEvent"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "MangoPublicationServiceInterface",
        "possibleTypes": [
          {
            "name": "MangoBroadcastService"
          },
          {
            "name": "MangoPublicationService"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "MangoSubjectInterface",
        "possibleTypes": [
          {
            "name": "MangoCreativeWork"
          },
          {
            "name": "MangoProgramme"
          },
          {
            "name": "MangoBestOf"
          },
          {
            "name": "MangoBoard"
          },
          {
            "name": "MangoClip"
          },
          {
            "name": "MangoExtra"
          },
          {
            "name": "MangoImage"
          },
          {
            "name": "MangoItem"
          },
          {
            "name": "MangoMakingOf"
          },
          {
            "name": "MangoPlaylist"
          },
          {
            "name": "MangoSeason"
          },
          {
            "name": "MangoSeries"
          },
          {
            "name": "MangoTrailer"
          },
          {
            "name": "MangoWebPage"
          },
          {
            "name": "MangoGrouping"
          },
          {
            "name": "MangoSubject"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "MangoTagInterface",
        "possibleTypes": [
          {
            "name": "MangoTag"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "MangoImageFileInterface",
        "possibleTypes": [
          {
            "name": "MangoImageFile"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "MangoImageFileCropInterface",
        "possibleTypes": [
          {
            "name": "MangoImageFileCrop"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "MangoLinkableThingInterface",
        "possibleTypes": [
          {
            "name": "MangoProgramme"
          },
          {
            "name": "MangoBestOf"
          },
          {
            "name": "MangoClip"
          },
          {
            "name": "MangoEndUser"
          },
          {
            "name": "MangoExtra"
          },
          {
            "name": "MangoImage"
          },
          {
            "name": "MangoItem"
          },
          {
            "name": "MangoLivestream"
          },
          {
            "name": "MangoMakingOf"
          },
          {
            "name": "MangoPerson"
          },
          {
            "name": "MangoPlaylist"
          },
          {
            "name": "MangoSeason"
          },
          {
            "name": "MangoSeries"
          },
          {
            "name": "MangoTrailer"
          },
          {
            "name": "MangoUser"
          },
          {
            "name": "MangoLinkableThing"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "MangoVersionedThingInterface",
        "possibleTypes": [
          {
            "name": "MangoProgramme"
          },
          {
            "name": "MangoBestOf"
          },
          {
            "name": "MangoClip"
          },
          {
            "name": "MangoExtra"
          },
          {
            "name": "MangoImage"
          },
          {
            "name": "MangoItem"
          },
          {
            "name": "MangoMakingOf"
          },
          {
            "name": "MangoPlaylist"
          },
          {
            "name": "MangoSeason"
          },
          {
            "name": "MangoSeries"
          },
          {
            "name": "MangoTrailer"
          },
          {
            "name": "MangoVersionedThing"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "MangoStatusInterface",
        "possibleTypes": [
          {
            "name": "MangoStatus"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "MangoBestOfInterface",
        "possibleTypes": [
          {
            "name": "MangoBestOf"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "MangoBroadcastEventInterface",
        "possibleTypes": [
          {
            "name": "MangoBroadcastEvent"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "MangoLivestreamInterface",
        "possibleTypes": [
          {
            "name": "MangoLivestream"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "MangoBroadcastServiceInterface",
        "possibleTypes": [
          {
            "name": "MangoBroadcastService"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "MangoProgrammeInterface",
        "possibleTypes": [
          {
            "name": "MangoProgramme"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "MangoTimedTextFileInterface",
        "possibleTypes": [
          {
            "name": "MangoTimedTextFile"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "MangoSeriesInterface",
        "possibleTypes": [
          {
            "name": "MangoSeries"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "MangoTrackingInfoInterface",
        "possibleTypes": [
          {
            "name": "MangoTrackingInfo"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "MangoSeasonInterface",
        "possibleTypes": [
          {
            "name": "MangoSeason"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "MangoItemInterface",
        "possibleTypes": [
          {
            "name": "MangoItem"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "MangoVideoFileInterface",
        "possibleTypes": [
          {
            "name": "MangoVideoFile"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "MangoCaptionInterface",
        "possibleTypes": [
          {
            "name": "MangoCaption"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "MangoSubtitleInterface",
        "possibleTypes": [
          {
            "name": "MangoCaption"
          },
          {
            "name": "MangoSubtitle"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "MangoVideoProfileInterface",
        "possibleTypes": [
          {
            "name": "MangoVideoProfile"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "MangoClipInterface",
        "possibleTypes": [
          {
            "name": "MangoProgramme"
          },
          {
            "name": "MangoBestOf"
          },
          {
            "name": "MangoClip"
          },
          {
            "name": "MangoExtra"
          },
          {
            "name": "MangoItem"
          },
          {
            "name": "MangoMakingOf"
          },
          {
            "name": "MangoTrailer"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "MangoContentInteractionInterface",
        "possibleTypes": [
          {
            "name": "MangoContentInteraction"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "MangoReactionTypeInterface",
        "possibleTypes": [
          {
            "name": "MangoReactionType"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "MangoEndUserInterface",
        "possibleTypes": [
          {
            "name": "MangoEndUser"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "MangoSubscriptionInterface",
        "possibleTypes": [
          {
            "name": "MangoSubscription"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "MangoBroadcastRegionInterface",
        "possibleTypes": [
          {
            "name": "MangoBroadcastRegion"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "MangoLivestreamResourceInterface",
        "possibleTypes": [
          {
            "name": "MangoLivestreamResource"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "AudioElement",
        "possibleTypes": [
          {
            "name": "NewsElement"
          },
          {
            "name": "MusicElement"
          },
          {
            "name": "AudioElementDefaultType"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "MangoBoardInterface",
        "possibleTypes": [
          {
            "name": "MangoBoard"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "MangoSectionInterface",
        "possibleTypes": [
          {
            "name": "MangoSection"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "MangoTeaserContentInterface",
        "possibleTypes": [
          {
            "name": "MangoTeaserContent"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "MangoSectionTemplateInterface",
        "possibleTypes": [
          {
            "name": "MangoSectionTemplate"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "MangoElementContentInterface",
        "possibleTypes": [
          {
            "name": "MangoBannerContent"
          },
          {
            "name": "MangoElementContent"
          },
          {
            "name": "MangoTeaserContent"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "MangoEmbeddableThingInterface",
        "possibleTypes": [
          {
            "name": "MangoProgramme"
          },
          {
            "name": "MangoBestOf"
          },
          {
            "name": "MangoClip"
          },
          {
            "name": "MangoExtra"
          },
          {
            "name": "MangoItem"
          },
          {
            "name": "MangoMakingOf"
          },
          {
            "name": "MangoTrailer"
          },
          {
            "name": "MangoEmbeddableThing"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "MangoExtraInterface",
        "possibleTypes": [
          {
            "name": "MangoBestOf"
          },
          {
            "name": "MangoExtra"
          },
          {
            "name": "MangoMakingOf"
          },
          {
            "name": "MangoTrailer"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "MangoImportableThingInterface",
        "possibleTypes": [
          {
            "name": "MangoProgramme"
          },
          {
            "name": "MangoAudioFile"
          },
          {
            "name": "MangoBestOf"
          },
          {
            "name": "MangoBoard"
          },
          {
            "name": "MangoBroadcastEvent"
          },
          {
            "name": "MangoClip"
          },
          {
            "name": "MangoEndUser"
          },
          {
            "name": "MangoExtra"
          },
          {
            "name": "MangoFile"
          },
          {
            "name": "MangoImage"
          },
          {
            "name": "MangoImageFile"
          },
          {
            "name": "MangoImportableThing"
          },
          {
            "name": "MangoItem"
          },
          {
            "name": "MangoLivestream"
          },
          {
            "name": "MangoLivestreamResource"
          },
          {
            "name": "MangoMakingOf"
          },
          {
            "name": "MangoPerson"
          },
          {
            "name": "MangoPlaylist"
          },
          {
            "name": "MangoSeason"
          },
          {
            "name": "MangoSeries"
          },
          {
            "name": "MangoTimedTextFile"
          },
          {
            "name": "MangoTrailer"
          },
          {
            "name": "MangoUser"
          },
          {
            "name": "MangoVideoFile"
          },
          {
            "name": "MangoWebPage"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "MangoMakingOfInterface",
        "possibleTypes": [
          {
            "name": "MangoMakingOf"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "MangoPlaylistInterface",
        "possibleTypes": [
          {
            "name": "MangoPlaylist"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "MangoProfileInterface",
        "possibleTypes": [
          {
            "name": "MangoAudioProfile"
          },
          {
            "name": "MangoProfile"
          },
          {
            "name": "MangoVideoProfile"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "MangoTrailerInterface",
        "possibleTypes": [
          {
            "name": "MangoTrailer"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "SophoraDocumentInterface",
        "possibleTypes": [
          {
            "name": "SophoraDocument"
          },
          {
            "name": "SophoraDocumentSummary"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "AudioBroadcastService",
        "possibleTypes": [
          {
            "name": "MangoBroadcastService"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "Node",
        "possibleTypes": [
          {
            "name": "NodeType"
          },
          {
            "name": "SophoraDocument"
          },
          {
            "name": "MangoCreativeWork"
          },
          {
            "name": "MangoProgramme"
          },
          {
            "name": "MangoBroadcastService"
          },
          {
            "name": "MetaMeta"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "NodeInterface",
        "possibleTypes": [
          {
            "name": "NodeType"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "MangoAgeRestrictedThingInterface",
        "possibleTypes": [
          {
            "name": "MangoProgramme"
          },
          {
            "name": "MangoBestOf"
          },
          {
            "name": "MangoClip"
          },
          {
            "name": "MangoExtra"
          },
          {
            "name": "MangoItem"
          },
          {
            "name": "MangoMakingOf"
          },
          {
            "name": "MangoTrailer"
          },
          {
            "name": "MangoAgeRestrictedThing"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "MangoPublishableThingInterface",
        "possibleTypes": [
          {
            "name": "MangoProgramme"
          },
          {
            "name": "MangoBestOf"
          },
          {
            "name": "MangoBoard"
          },
          {
            "name": "MangoClip"
          },
          {
            "name": "MangoExtra"
          },
          {
            "name": "MangoImage"
          },
          {
            "name": "MangoItem"
          },
          {
            "name": "MangoMakingOf"
          },
          {
            "name": "MangoPlaylist"
          },
          {
            "name": "MangoSeason"
          },
          {
            "name": "MangoSeries"
          },
          {
            "name": "MangoTrailer"
          },
          {
            "name": "MangoWebPage"
          },
          {
            "name": "MangoPublishableThing"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "MangoShortlyAvailableThingInterface",
        "possibleTypes": [
          {
            "name": "MangoProgramme"
          },
          {
            "name": "MangoBestOf"
          },
          {
            "name": "MangoClip"
          },
          {
            "name": "MangoExtra"
          },
          {
            "name": "MangoItem"
          },
          {
            "name": "MangoMakingOf"
          },
          {
            "name": "MangoTrailer"
          },
          {
            "name": "MangoShortlyAvailableThing"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "MangoThingWithCanonicalUrlInterface",
        "possibleTypes": [
          {
            "name": "MangoProgramme"
          },
          {
            "name": "MangoBestOf"
          },
          {
            "name": "MangoBoard"
          },
          {
            "name": "MangoClip"
          },
          {
            "name": "MangoExtra"
          },
          {
            "name": "MangoItem"
          },
          {
            "name": "MangoLivestream"
          },
          {
            "name": "MangoMakingOf"
          },
          {
            "name": "MangoSeries"
          },
          {
            "name": "MangoTrailer"
          },
          {
            "name": "MangoWebPage"
          },
          {
            "name": "MangoThingWithCanonicalUrl"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "MangoThingWithRelevancePeriodInterface",
        "possibleTypes": [
          {
            "name": "MangoProgramme"
          },
          {
            "name": "MangoBestOf"
          },
          {
            "name": "MangoClip"
          },
          {
            "name": "MangoExtra"
          },
          {
            "name": "MangoItem"
          },
          {
            "name": "MangoMakingOf"
          },
          {
            "name": "MangoTrailer"
          },
          {
            "name": "MangoThingWithRelevancePeriod"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "MangoTrackableThingInterface",
        "possibleTypes": [
          {
            "name": "MangoProgramme"
          },
          {
            "name": "MangoBestOf"
          },
          {
            "name": "MangoBoard"
          },
          {
            "name": "MangoBroadcastEvent"
          },
          {
            "name": "MangoClip"
          },
          {
            "name": "MangoExtra"
          },
          {
            "name": "MangoItem"
          },
          {
            "name": "MangoMakingOf"
          },
          {
            "name": "MangoSeries"
          },
          {
            "name": "MangoTrailer"
          },
          {
            "name": "MangoTrackableThing"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "MangoWritableThingInterface",
        "possibleTypes": [
          {
            "name": "MangoProgramme"
          },
          {
            "name": "MangoBroadcastService"
          },
          {
            "name": "MangoAudioFile"
          },
          {
            "name": "MangoBannerContent"
          },
          {
            "name": "MangoBestOf"
          },
          {
            "name": "MangoBoard"
          },
          {
            "name": "MangoBroadcastEvent"
          },
          {
            "name": "MangoCaption"
          },
          {
            "name": "MangoClip"
          },
          {
            "name": "MangoContentInteraction"
          },
          {
            "name": "MangoElementContent"
          },
          {
            "name": "MangoEndUser"
          },
          {
            "name": "MangoExternalURL"
          },
          {
            "name": "MangoExtra"
          },
          {
            "name": "MangoFacebookAccount"
          },
          {
            "name": "MangoFile"
          },
          {
            "name": "MangoImage"
          },
          {
            "name": "MangoImageFile"
          },
          {
            "name": "MangoImageFileCrop"
          },
          {
            "name": "MangoImportLocator"
          },
          {
            "name": "MangoImportableThing"
          },
          {
            "name": "MangoItem"
          },
          {
            "name": "MangoLivestream"
          },
          {
            "name": "MangoLivestreamResource"
          },
          {
            "name": "MangoLocator"
          },
          {
            "name": "MangoMakingOf"
          },
          {
            "name": "MangoPerson"
          },
          {
            "name": "MangoPlaylist"
          },
          {
            "name": "MangoPublicationEvent"
          },
          {
            "name": "MangoSeason"
          },
          {
            "name": "MangoSection"
          },
          {
            "name": "MangoSectionTemplate"
          },
          {
            "name": "MangoSeries"
          },
          {
            "name": "MangoSocialMediaAccount"
          },
          {
            "name": "MangoSubscription"
          },
          {
            "name": "MangoSubtitle"
          },
          {
            "name": "MangoTeaserContent"
          },
          {
            "name": "MangoTimedTextFile"
          },
          {
            "name": "MangoTrackingInfo"
          },
          {
            "name": "MangoTrailer"
          },
          {
            "name": "MangoTwitterAccount"
          },
          {
            "name": "MangoUser"
          },
          {
            "name": "MangoVideoFile"
          },
          {
            "name": "MangoWebPage"
          },
          {
            "name": "MangoWebhook"
          },
          {
            "name": "MangoWritableThing"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "MangoDeletableThingInterface",
        "possibleTypes": [
          {
            "name": "MangoContentInteraction"
          },
          {
            "name": "MangoSection"
          },
          {
            "name": "MangoSubscription"
          },
          {
            "name": "MangoDeletableThing"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "MangoPersonInterface",
        "possibleTypes": [
          {
            "name": "MangoEndUser"
          },
          {
            "name": "MangoPerson"
          },
          {
            "name": "MangoUser"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "MangoUserInterface",
        "possibleTypes": [
          {
            "name": "MangoEndUser"
          },
          {
            "name": "MangoUser"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "MangoSocialMediaAccountInterface",
        "possibleTypes": [
          {
            "name": "MangoFacebookAccount"
          },
          {
            "name": "MangoSocialMediaAccount"
          },
          {
            "name": "MangoTwitterAccount"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "MangoLocatorInterface",
        "possibleTypes": [
          {
            "name": "MangoImportLocator"
          },
          {
            "name": "MangoLocator"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "MangoWebPageInterface",
        "possibleTypes": [
          {
            "name": "MangoWebPage"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "MangoWebhookInterface",
        "possibleTypes": [
          {
            "name": "MangoWebhook"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "MangoCollationInterface",
        "possibleTypes": [
          {
            "name": "MangoCollation"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "MangoOrganizationalUnitInterface",
        "possibleTypes": [
          {
            "name": "MangoDepartment"
          },
          {
            "name": "MangoOrganizationalUnit"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "MangoGSEAInterface",
        "possibleTypes": [
          {
            "name": "MangoGSEA"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "MangoLRAInterface",
        "possibleTypes": [
          {
            "name": "MangoLRA"
          }
        ]
      }
    ]
  }
};
      export default result;
    