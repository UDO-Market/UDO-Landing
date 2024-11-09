import headerEng from './locales/en/header.json'
import mainEng from './locales/en/main.json'
import sectionAboutEng from './locales/en/sectionAbout.json'
import sectionCommunityEng from './locales/en/sectionCommunity.json'
import sectionLearnEng from './locales/en/sectionLearn.json'
import sectionOurPartnersEng from './locales/en/sectionOurPartners.json'
import sectionRoadMapEng from './locales/en/sectionRoadMap.json'
import sectionTonWalletEng from './locales/en/sectionTonWallet.json'

import headerRu from './locales/ru/header.json'
import mainRu from './locales/ru/main.json'
import sectionAboutRu from './locales/ru/sectionAbout.json'
import sectionCommunityRu from './locales/ru/sectionCommunity.json'
import sectionLearnRu from './locales/ru/sectionLearn.json'
import sectionOurPartnersRu from './locales/ru/sectionOurPartners.json'
import sectionRoadMapRu from './locales/ru/sectionRoadMap.json'
import sectionTonWalletRu from './locales/ru/sectionTonWallet.json'

export const resources = {
    en: {
      translation:{
        ...headerEng,
        ...mainEng,
        ...sectionAboutEng,
        ...sectionCommunityEng,
        ...sectionLearnEng,
        ...sectionOurPartnersEng,
        ...sectionRoadMapEng,
        ...sectionTonWalletEng
      },
    },
    ru: {
      translation: {
        ...headerRu,
        ...mainRu,
        ...sectionAboutRu,
        ...sectionCommunityRu,
        ...sectionLearnRu,
        ...sectionOurPartnersRu,
        ...sectionRoadMapRu,
        ...sectionTonWalletRu
      },
    },
};
