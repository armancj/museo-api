'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">museo-api documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AccessAndUseConditionsModule.html" data-type="entity-link" >AccessAndUseConditionsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AccessAndUseConditionsModule-c15591857b9f47045e1bc42e578796757ae491332b9e87b97a1d70b020e8f81539d4c3eaf2b64f9f7ff76e18fa0c50ad82ef48f44f22d6db317032ff5a13842b"' : 'data-bs-target="#xs-controllers-links-module-AccessAndUseConditionsModule-c15591857b9f47045e1bc42e578796757ae491332b9e87b97a1d70b020e8f81539d4c3eaf2b64f9f7ff76e18fa0c50ad82ef48f44f22d6db317032ff5a13842b"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AccessAndUseConditionsModule-c15591857b9f47045e1bc42e578796757ae491332b9e87b97a1d70b020e8f81539d4c3eaf2b64f9f7ff76e18fa0c50ad82ef48f44f22d6db317032ff5a13842b"' :
                                            'id="xs-controllers-links-module-AccessAndUseConditionsModule-c15591857b9f47045e1bc42e578796757ae491332b9e87b97a1d70b020e8f81539d4c3eaf2b64f9f7ff76e18fa0c50ad82ef48f44f22d6db317032ff5a13842b"' }>
                                            <li class="link">
                                                <a href="controllers/AccessAndUseConditionsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AccessAndUseConditionsController</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AddressModule.html" data-type="entity-link" >AddressModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-0933689d78d6270cc33a20c2d9f8e3ad99025a2c9f304e11cc7b72a1d8d251cbb81406cd9eb605326e4c6224297dd6de7c587d6eccd3c6f11af3fafd8fc84451"' : 'data-bs-target="#xs-controllers-links-module-AppModule-0933689d78d6270cc33a20c2d9f8e3ad99025a2c9f304e11cc7b72a1d8d251cbb81406cd9eb605326e4c6224297dd6de7c587d6eccd3c6f11af3fafd8fc84451"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-0933689d78d6270cc33a20c2d9f8e3ad99025a2c9f304e11cc7b72a1d8d251cbb81406cd9eb605326e4c6224297dd6de7c587d6eccd3c6f11af3fafd8fc84451"' :
                                            'id="xs-controllers-links-module-AppModule-0933689d78d6270cc33a20c2d9f8e3ad99025a2c9f304e11cc7b72a1d8d251cbb81406cd9eb605326e4c6224297dd6de7c587d6eccd3c6f11af3fafd8fc84451"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-0933689d78d6270cc33a20c2d9f8e3ad99025a2c9f304e11cc7b72a1d8d251cbb81406cd9eb605326e4c6224297dd6de7c587d6eccd3c6f11af3fafd8fc84451"' : 'data-bs-target="#xs-injectables-links-module-AppModule-0933689d78d6270cc33a20c2d9f8e3ad99025a2c9f304e11cc7b72a1d8d251cbb81406cd9eb605326e4c6224297dd6de7c587d6eccd3c6f11af3fafd8fc84451"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-0933689d78d6270cc33a20c2d9f8e3ad99025a2c9f304e11cc7b72a1d8d251cbb81406cd9eb605326e4c6224297dd6de7c587d6eccd3c6f11af3fafd8fc84451"' :
                                        'id="xs-injectables-links-module-AppModule-0933689d78d6270cc33a20c2d9f8e3ad99025a2c9f304e11cc7b72a1d8d251cbb81406cd9eb605326e4c6224297dd6de7c587d6eccd3c6f11af3fafd8fc84451"' }>
                                        <li class="link">
                                            <a href="injectables/LoggerInterceptor.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoggerInterceptor</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AssociatedDocumentationModule.html" data-type="entity-link" >AssociatedDocumentationModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AssociatedDocumentationModule-db22fd5244fbc6866bb2dc5bc069c53a91e94b730be110dad82ed6bd1a52461cee288245b880a82f47d1381c53f47512d70766cea0e962be20e4442923e67999"' : 'data-bs-target="#xs-controllers-links-module-AssociatedDocumentationModule-db22fd5244fbc6866bb2dc5bc069c53a91e94b730be110dad82ed6bd1a52461cee288245b880a82f47d1381c53f47512d70766cea0e962be20e4442923e67999"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AssociatedDocumentationModule-db22fd5244fbc6866bb2dc5bc069c53a91e94b730be110dad82ed6bd1a52461cee288245b880a82f47d1381c53f47512d70766cea0e962be20e4442923e67999"' :
                                            'id="xs-controllers-links-module-AssociatedDocumentationModule-db22fd5244fbc6866bb2dc5bc069c53a91e94b730be110dad82ed6bd1a52461cee288245b880a82f47d1381c53f47512d70766cea0e962be20e4442923e67999"' }>
                                            <li class="link">
                                                <a href="controllers/AssociatedDocumentationController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AssociatedDocumentationController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AssociatedDocumentationModule-db22fd5244fbc6866bb2dc5bc069c53a91e94b730be110dad82ed6bd1a52461cee288245b880a82f47d1381c53f47512d70766cea0e962be20e4442923e67999"' : 'data-bs-target="#xs-injectables-links-module-AssociatedDocumentationModule-db22fd5244fbc6866bb2dc5bc069c53a91e94b730be110dad82ed6bd1a52461cee288245b880a82f47d1381c53f47512d70766cea0e962be20e4442923e67999"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AssociatedDocumentationModule-db22fd5244fbc6866bb2dc5bc069c53a91e94b730be110dad82ed6bd1a52461cee288245b880a82f47d1381c53f47512d70766cea0e962be20e4442923e67999"' :
                                        'id="xs-injectables-links-module-AssociatedDocumentationModule-db22fd5244fbc6866bb2dc5bc069c53a91e94b730be110dad82ed6bd1a52461cee288245b880a82f47d1381c53f47512d70766cea0e962be20e4442923e67999"' }>
                                        <li class="link">
                                            <a href="injectables/AssociatedDocumentationService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AssociatedDocumentationService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-c61db984d596a541fe824331e9d04612d8f68bc7baa65eec718f39ef8a0bc697c9027d22a7e56567e7c9254d6c3485b7fd3127850a27621b054c48642f6af4e9"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-c61db984d596a541fe824331e9d04612d8f68bc7baa65eec718f39ef8a0bc697c9027d22a7e56567e7c9254d6c3485b7fd3127850a27621b054c48642f6af4e9"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-c61db984d596a541fe824331e9d04612d8f68bc7baa65eec718f39ef8a0bc697c9027d22a7e56567e7c9254d6c3485b7fd3127850a27621b054c48642f6af4e9"' :
                                            'id="xs-controllers-links-module-AuthModule-c61db984d596a541fe824331e9d04612d8f68bc7baa65eec718f39ef8a0bc697c9027d22a7e56567e7c9254d6c3485b7fd3127850a27621b054c48642f6af4e9"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-c61db984d596a541fe824331e9d04612d8f68bc7baa65eec718f39ef8a0bc697c9027d22a7e56567e7c9254d6c3485b7fd3127850a27621b054c48642f6af4e9"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-c61db984d596a541fe824331e9d04612d8f68bc7baa65eec718f39ef8a0bc697c9027d22a7e56567e7c9254d6c3485b7fd3127850a27621b054c48642f6af4e9"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-c61db984d596a541fe824331e9d04612d8f68bc7baa65eec718f39ef8a0bc697c9027d22a7e56567e7c9254d6c3485b7fd3127850a27621b054c48642f6af4e9"' :
                                        'id="xs-injectables-links-module-AuthModule-c61db984d596a541fe824331e9d04612d8f68bc7baa65eec718f39ef8a0bc697c9027d22a7e56567e7c9254d6c3485b7fd3127850a27621b054c48642f6af4e9"' }>
                                        <li class="link">
                                            <a href="injectables/AuthMongoRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthMongoRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtRefreshTokenStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtRefreshTokenStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LocalStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LocalStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CategoryMuseumModule.html" data-type="entity-link" >CategoryMuseumModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-CategoryMuseumModule-9ff601be186e9ffa448c1d076eb03e0d768aa082e11d491919f6616b12454c8c2a310b66acbd9d23dee94448944266ce85e18d6fe2b584aeba5eee8464309bb7"' : 'data-bs-target="#xs-controllers-links-module-CategoryMuseumModule-9ff601be186e9ffa448c1d076eb03e0d768aa082e11d491919f6616b12454c8c2a310b66acbd9d23dee94448944266ce85e18d6fe2b584aeba5eee8464309bb7"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CategoryMuseumModule-9ff601be186e9ffa448c1d076eb03e0d768aa082e11d491919f6616b12454c8c2a310b66acbd9d23dee94448944266ce85e18d6fe2b584aeba5eee8464309bb7"' :
                                            'id="xs-controllers-links-module-CategoryMuseumModule-9ff601be186e9ffa448c1d076eb03e0d768aa082e11d491919f6616b12454c8c2a310b66acbd9d23dee94448944266ce85e18d6fe2b584aeba5eee8464309bb7"' }>
                                            <li class="link">
                                                <a href="controllers/CategoryMuseumController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CategoryMuseumController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-CategoryMuseumModule-9ff601be186e9ffa448c1d076eb03e0d768aa082e11d491919f6616b12454c8c2a310b66acbd9d23dee94448944266ce85e18d6fe2b584aeba5eee8464309bb7"' : 'data-bs-target="#xs-injectables-links-module-CategoryMuseumModule-9ff601be186e9ffa448c1d076eb03e0d768aa082e11d491919f6616b12454c8c2a310b66acbd9d23dee94448944266ce85e18d6fe2b584aeba5eee8464309bb7"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CategoryMuseumModule-9ff601be186e9ffa448c1d076eb03e0d768aa082e11d491919f6616b12454c8c2a310b66acbd9d23dee94448944266ce85e18d6fe2b584aeba5eee8464309bb7"' :
                                        'id="xs-injectables-links-module-CategoryMuseumModule-9ff601be186e9ffa448c1d076eb03e0d768aa082e11d491919f6616b12454c8c2a310b66acbd9d23dee94448944266ce85e18d6fe2b584aeba5eee8464309bb7"' }>
                                        <li class="link">
                                            <a href="injectables/CategoryMuseumService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CategoryMuseumService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CommandsModule.html" data-type="entity-link" >CommandsModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CommercialRegistrationModule.html" data-type="entity-link" >CommercialRegistrationModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-CommercialRegistrationModule-29e98294908e182733b49b299a35c96f7d51953d3710e6b1a95646149af3d480667bdeb93028e18d8c283ebe883f7a6d564f3153adb0f6eeca6bb380b6cfba6c"' : 'data-bs-target="#xs-controllers-links-module-CommercialRegistrationModule-29e98294908e182733b49b299a35c96f7d51953d3710e6b1a95646149af3d480667bdeb93028e18d8c283ebe883f7a6d564f3153adb0f6eeca6bb380b6cfba6c"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CommercialRegistrationModule-29e98294908e182733b49b299a35c96f7d51953d3710e6b1a95646149af3d480667bdeb93028e18d8c283ebe883f7a6d564f3153adb0f6eeca6bb380b6cfba6c"' :
                                            'id="xs-controllers-links-module-CommercialRegistrationModule-29e98294908e182733b49b299a35c96f7d51953d3710e6b1a95646149af3d480667bdeb93028e18d8c283ebe883f7a6d564f3153adb0f6eeca6bb380b6cfba6c"' }>
                                            <li class="link">
                                                <a href="controllers/CommercialRegistrationController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CommercialRegistrationController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-CommercialRegistrationModule-29e98294908e182733b49b299a35c96f7d51953d3710e6b1a95646149af3d480667bdeb93028e18d8c283ebe883f7a6d564f3153adb0f6eeca6bb380b6cfba6c"' : 'data-bs-target="#xs-injectables-links-module-CommercialRegistrationModule-29e98294908e182733b49b299a35c96f7d51953d3710e6b1a95646149af3d480667bdeb93028e18d8c283ebe883f7a6d564f3153adb0f6eeca6bb380b6cfba6c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CommercialRegistrationModule-29e98294908e182733b49b299a35c96f7d51953d3710e6b1a95646149af3d480667bdeb93028e18d8c283ebe883f7a6d564f3153adb0f6eeca6bb380b6cfba6c"' :
                                        'id="xs-injectables-links-module-CommercialRegistrationModule-29e98294908e182733b49b299a35c96f7d51953d3710e6b1a95646149af3d480667bdeb93028e18d8c283ebe883f7a6d564f3153adb0f6eeca6bb380b6cfba6c"' }>
                                        <li class="link">
                                            <a href="injectables/CommercialRegistrationService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CommercialRegistrationService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ConfigModule.html" data-type="entity-link" >ConfigModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link" >CoreModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CountryModule.html" data-type="entity-link" >CountryModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-CountryModule-d178c027e95b30c5e32d4564c4b172d25d4db8f2283f02839f7fb151689cf9b1086c53d3e91908552ef9821609254f73efdc46cdc1ef8b3ddb229df45a59639a"' : 'data-bs-target="#xs-controllers-links-module-CountryModule-d178c027e95b30c5e32d4564c4b172d25d4db8f2283f02839f7fb151689cf9b1086c53d3e91908552ef9821609254f73efdc46cdc1ef8b3ddb229df45a59639a"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CountryModule-d178c027e95b30c5e32d4564c4b172d25d4db8f2283f02839f7fb151689cf9b1086c53d3e91908552ef9821609254f73efdc46cdc1ef8b3ddb229df45a59639a"' :
                                            'id="xs-controllers-links-module-CountryModule-d178c027e95b30c5e32d4564c4b172d25d4db8f2283f02839f7fb151689cf9b1086c53d3e91908552ef9821609254f73efdc46cdc1ef8b3ddb229df45a59639a"' }>
                                            <li class="link">
                                                <a href="controllers/CountryController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CountryController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-CountryModule-d178c027e95b30c5e32d4564c4b172d25d4db8f2283f02839f7fb151689cf9b1086c53d3e91908552ef9821609254f73efdc46cdc1ef8b3ddb229df45a59639a"' : 'data-bs-target="#xs-injectables-links-module-CountryModule-d178c027e95b30c5e32d4564c4b172d25d4db8f2283f02839f7fb151689cf9b1086c53d3e91908552ef9821609254f73efdc46cdc1ef8b3ddb229df45a59639a"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CountryModule-d178c027e95b30c5e32d4564c4b172d25d4db8f2283f02839f7fb151689cf9b1086c53d3e91908552ef9821609254f73efdc46cdc1ef8b3ddb229df45a59639a"' :
                                        'id="xs-injectables-links-module-CountryModule-d178c027e95b30c5e32d4564c4b172d25d4db8f2283f02839f7fb151689cf9b1086c53d3e91908552ef9821609254f73efdc46cdc1ef8b3ddb229df45a59639a"' }>
                                        <li class="link">
                                            <a href="injectables/CountryService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CountryService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CreationDetailsModule.html" data-type="entity-link" >CreationDetailsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-CreationDetailsModule-ee2c188aa074932caf67f57921fc59bd07f963462748c2c49f66f52e2f533fc4fde890c1e68b496fdd6417443b624ebdde48f699a673f3eb967cb6bc0c2adb2d"' : 'data-bs-target="#xs-controllers-links-module-CreationDetailsModule-ee2c188aa074932caf67f57921fc59bd07f963462748c2c49f66f52e2f533fc4fde890c1e68b496fdd6417443b624ebdde48f699a673f3eb967cb6bc0c2adb2d"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CreationDetailsModule-ee2c188aa074932caf67f57921fc59bd07f963462748c2c49f66f52e2f533fc4fde890c1e68b496fdd6417443b624ebdde48f699a673f3eb967cb6bc0c2adb2d"' :
                                            'id="xs-controllers-links-module-CreationDetailsModule-ee2c188aa074932caf67f57921fc59bd07f963462748c2c49f66f52e2f533fc4fde890c1e68b496fdd6417443b624ebdde48f699a673f3eb967cb6bc0c2adb2d"' }>
                                            <li class="link">
                                                <a href="controllers/CreationDetailsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreationDetailsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-CreationDetailsModule-ee2c188aa074932caf67f57921fc59bd07f963462748c2c49f66f52e2f533fc4fde890c1e68b496fdd6417443b624ebdde48f699a673f3eb967cb6bc0c2adb2d"' : 'data-bs-target="#xs-injectables-links-module-CreationDetailsModule-ee2c188aa074932caf67f57921fc59bd07f963462748c2c49f66f52e2f533fc4fde890c1e68b496fdd6417443b624ebdde48f699a673f3eb967cb6bc0c2adb2d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CreationDetailsModule-ee2c188aa074932caf67f57921fc59bd07f963462748c2c49f66f52e2f533fc4fde890c1e68b496fdd6417443b624ebdde48f699a673f3eb967cb6bc0c2adb2d"' :
                                        'id="xs-injectables-links-module-CreationDetailsModule-ee2c188aa074932caf67f57921fc59bd07f963462748c2c49f66f52e2f533fc4fde890c1e68b496fdd6417443b624ebdde48f699a673f3eb967cb6bc0c2adb2d"' }>
                                        <li class="link">
                                            <a href="injectables/CreationDetailsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreationDetailsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CulturalHeritagePropertyModule.html" data-type="entity-link" >CulturalHeritagePropertyModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-CulturalHeritagePropertyModule-ca38062d80895fd74644e5cbf7a9144a2db626ff5db467fcaef83863daa4bc483424eb71a838344e289e39f42ff59f29ac6b0e4e8d45a5b0ed23cbb24c1b5cff"' : 'data-bs-target="#xs-controllers-links-module-CulturalHeritagePropertyModule-ca38062d80895fd74644e5cbf7a9144a2db626ff5db467fcaef83863daa4bc483424eb71a838344e289e39f42ff59f29ac6b0e4e8d45a5b0ed23cbb24c1b5cff"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CulturalHeritagePropertyModule-ca38062d80895fd74644e5cbf7a9144a2db626ff5db467fcaef83863daa4bc483424eb71a838344e289e39f42ff59f29ac6b0e4e8d45a5b0ed23cbb24c1b5cff"' :
                                            'id="xs-controllers-links-module-CulturalHeritagePropertyModule-ca38062d80895fd74644e5cbf7a9144a2db626ff5db467fcaef83863daa4bc483424eb71a838344e289e39f42ff59f29ac6b0e4e8d45a5b0ed23cbb24c1b5cff"' }>
                                            <li class="link">
                                                <a href="controllers/CulturalHeritagePropertyController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CulturalHeritagePropertyController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-CulturalHeritagePropertyModule-ca38062d80895fd74644e5cbf7a9144a2db626ff5db467fcaef83863daa4bc483424eb71a838344e289e39f42ff59f29ac6b0e4e8d45a5b0ed23cbb24c1b5cff"' : 'data-bs-target="#xs-injectables-links-module-CulturalHeritagePropertyModule-ca38062d80895fd74644e5cbf7a9144a2db626ff5db467fcaef83863daa4bc483424eb71a838344e289e39f42ff59f29ac6b0e4e8d45a5b0ed23cbb24c1b5cff"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CulturalHeritagePropertyModule-ca38062d80895fd74644e5cbf7a9144a2db626ff5db467fcaef83863daa4bc483424eb71a838344e289e39f42ff59f29ac6b0e4e8d45a5b0ed23cbb24c1b5cff"' :
                                        'id="xs-injectables-links-module-CulturalHeritagePropertyModule-ca38062d80895fd74644e5cbf7a9144a2db626ff5db467fcaef83863daa4bc483424eb71a838344e289e39f42ff59f29ac6b0e4e8d45a5b0ed23cbb24c1b5cff"' }>
                                        <li class="link">
                                            <a href="injectables/CulturalHeritagePropertyService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CulturalHeritagePropertyService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CulturalNotesModule.html" data-type="entity-link" >CulturalNotesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-CulturalNotesModule-72f5af157c0cf2ed24e552342a84c30b94440ef0d93cc1bd847e5e28571918a868b7d11f30bcd85f624b4c07127bd4cc7f88e4a13e010e7241e155c7bdeea8e4"' : 'data-bs-target="#xs-controllers-links-module-CulturalNotesModule-72f5af157c0cf2ed24e552342a84c30b94440ef0d93cc1bd847e5e28571918a868b7d11f30bcd85f624b4c07127bd4cc7f88e4a13e010e7241e155c7bdeea8e4"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CulturalNotesModule-72f5af157c0cf2ed24e552342a84c30b94440ef0d93cc1bd847e5e28571918a868b7d11f30bcd85f624b4c07127bd4cc7f88e4a13e010e7241e155c7bdeea8e4"' :
                                            'id="xs-controllers-links-module-CulturalNotesModule-72f5af157c0cf2ed24e552342a84c30b94440ef0d93cc1bd847e5e28571918a868b7d11f30bcd85f624b4c07127bd4cc7f88e4a13e010e7241e155c7bdeea8e4"' }>
                                            <li class="link">
                                                <a href="controllers/CulturalNotesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CulturalNotesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-CulturalNotesModule-72f5af157c0cf2ed24e552342a84c30b94440ef0d93cc1bd847e5e28571918a868b7d11f30bcd85f624b4c07127bd4cc7f88e4a13e010e7241e155c7bdeea8e4"' : 'data-bs-target="#xs-injectables-links-module-CulturalNotesModule-72f5af157c0cf2ed24e552342a84c30b94440ef0d93cc1bd847e5e28571918a868b7d11f30bcd85f624b4c07127bd4cc7f88e4a13e010e7241e155c7bdeea8e4"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CulturalNotesModule-72f5af157c0cf2ed24e552342a84c30b94440ef0d93cc1bd847e5e28571918a868b7d11f30bcd85f624b4c07127bd4cc7f88e4a13e010e7241e155c7bdeea8e4"' :
                                        'id="xs-injectables-links-module-CulturalNotesModule-72f5af157c0cf2ed24e552342a84c30b94440ef0d93cc1bd847e5e28571918a868b7d11f30bcd85f624b4c07127bd4cc7f88e4a13e010e7241e155c7bdeea8e4"' }>
                                        <li class="link">
                                            <a href="injectables/CulturalNotesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CulturalNotesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CulturalRecordModule.html" data-type="entity-link" >CulturalRecordModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-CulturalRecordModule-1c5ea64ffa6104f8d5d22c7555743441ad173cdb8f867f3adfab8418976dad90ee465f5ec5794cb4e915e380e9404caf3f1a9533cd97a67f381dd2c8532d727f"' : 'data-bs-target="#xs-controllers-links-module-CulturalRecordModule-1c5ea64ffa6104f8d5d22c7555743441ad173cdb8f867f3adfab8418976dad90ee465f5ec5794cb4e915e380e9404caf3f1a9533cd97a67f381dd2c8532d727f"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CulturalRecordModule-1c5ea64ffa6104f8d5d22c7555743441ad173cdb8f867f3adfab8418976dad90ee465f5ec5794cb4e915e380e9404caf3f1a9533cd97a67f381dd2c8532d727f"' :
                                            'id="xs-controllers-links-module-CulturalRecordModule-1c5ea64ffa6104f8d5d22c7555743441ad173cdb8f867f3adfab8418976dad90ee465f5ec5794cb4e915e380e9404caf3f1a9533cd97a67f381dd2c8532d727f"' }>
                                            <li class="link">
                                                <a href="controllers/CulturalRecordController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CulturalRecordController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-CulturalRecordModule-1c5ea64ffa6104f8d5d22c7555743441ad173cdb8f867f3adfab8418976dad90ee465f5ec5794cb4e915e380e9404caf3f1a9533cd97a67f381dd2c8532d727f"' : 'data-bs-target="#xs-injectables-links-module-CulturalRecordModule-1c5ea64ffa6104f8d5d22c7555743441ad173cdb8f867f3adfab8418976dad90ee465f5ec5794cb4e915e380e9404caf3f1a9533cd97a67f381dd2c8532d727f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CulturalRecordModule-1c5ea64ffa6104f8d5d22c7555743441ad173cdb8f867f3adfab8418976dad90ee465f5ec5794cb4e915e380e9404caf3f1a9533cd97a67f381dd2c8532d727f"' :
                                        'id="xs-injectables-links-module-CulturalRecordModule-1c5ea64ffa6104f8d5d22c7555743441ad173cdb8f867f3adfab8418976dad90ee465f5ec5794cb4e915e380e9404caf3f1a9533cd97a67f381dd2c8532d727f"' }>
                                        <li class="link">
                                            <a href="injectables/CulturalRecordService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CulturalRecordService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DescriptionControlModule.html" data-type="entity-link" >DescriptionControlModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-DescriptionControlModule-af47d61a5cecbb7693e77c26ad01161a1cf8e3c380747dc3524cd0b125bf7022deecd0e6bcd1bd13886367b4aed2aad7f2505f18f3c823065beb3f2054684fc8"' : 'data-bs-target="#xs-controllers-links-module-DescriptionControlModule-af47d61a5cecbb7693e77c26ad01161a1cf8e3c380747dc3524cd0b125bf7022deecd0e6bcd1bd13886367b4aed2aad7f2505f18f3c823065beb3f2054684fc8"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-DescriptionControlModule-af47d61a5cecbb7693e77c26ad01161a1cf8e3c380747dc3524cd0b125bf7022deecd0e6bcd1bd13886367b4aed2aad7f2505f18f3c823065beb3f2054684fc8"' :
                                            'id="xs-controllers-links-module-DescriptionControlModule-af47d61a5cecbb7693e77c26ad01161a1cf8e3c380747dc3524cd0b125bf7022deecd0e6bcd1bd13886367b4aed2aad7f2505f18f3c823065beb3f2054684fc8"' }>
                                            <li class="link">
                                                <a href="controllers/DescriptionControlController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DescriptionControlController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-DescriptionControlModule-af47d61a5cecbb7693e77c26ad01161a1cf8e3c380747dc3524cd0b125bf7022deecd0e6bcd1bd13886367b4aed2aad7f2505f18f3c823065beb3f2054684fc8"' : 'data-bs-target="#xs-injectables-links-module-DescriptionControlModule-af47d61a5cecbb7693e77c26ad01161a1cf8e3c380747dc3524cd0b125bf7022deecd0e6bcd1bd13886367b4aed2aad7f2505f18f3c823065beb3f2054684fc8"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-DescriptionControlModule-af47d61a5cecbb7693e77c26ad01161a1cf8e3c380747dc3524cd0b125bf7022deecd0e6bcd1bd13886367b4aed2aad7f2505f18f3c823065beb3f2054684fc8"' :
                                        'id="xs-injectables-links-module-DescriptionControlModule-af47d61a5cecbb7693e77c26ad01161a1cf8e3c380747dc3524cd0b125bf7022deecd0e6bcd1bd13886367b4aed2aad7f2505f18f3c823065beb3f2054684fc8"' }>
                                        <li class="link">
                                            <a href="injectables/DescriptionControlService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DescriptionControlService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DescriptionUnitsModule.html" data-type="entity-link" >DescriptionUnitsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-DescriptionUnitsModule-6794ed38823e97463329c6aa01c951aa4bbf044d216037aa3291224cb6f2dacb929cda49d793524f2ea3cf96899fc29891aee652e0c265149e2fee170cd44424"' : 'data-bs-target="#xs-controllers-links-module-DescriptionUnitsModule-6794ed38823e97463329c6aa01c951aa4bbf044d216037aa3291224cb6f2dacb929cda49d793524f2ea3cf96899fc29891aee652e0c265149e2fee170cd44424"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-DescriptionUnitsModule-6794ed38823e97463329c6aa01c951aa4bbf044d216037aa3291224cb6f2dacb929cda49d793524f2ea3cf96899fc29891aee652e0c265149e2fee170cd44424"' :
                                            'id="xs-controllers-links-module-DescriptionUnitsModule-6794ed38823e97463329c6aa01c951aa4bbf044d216037aa3291224cb6f2dacb929cda49d793524f2ea3cf96899fc29891aee652e0c265149e2fee170cd44424"' }>
                                            <li class="link">
                                                <a href="controllers/DescriptionUnitsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DescriptionUnitsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-DescriptionUnitsModule-6794ed38823e97463329c6aa01c951aa4bbf044d216037aa3291224cb6f2dacb929cda49d793524f2ea3cf96899fc29891aee652e0c265149e2fee170cd44424"' : 'data-bs-target="#xs-injectables-links-module-DescriptionUnitsModule-6794ed38823e97463329c6aa01c951aa4bbf044d216037aa3291224cb6f2dacb929cda49d793524f2ea3cf96899fc29891aee652e0c265149e2fee170cd44424"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-DescriptionUnitsModule-6794ed38823e97463329c6aa01c951aa4bbf044d216037aa3291224cb6f2dacb929cda49d793524f2ea3cf96899fc29891aee652e0c265149e2fee170cd44424"' :
                                        'id="xs-injectables-links-module-DescriptionUnitsModule-6794ed38823e97463329c6aa01c951aa4bbf044d216037aa3291224cb6f2dacb929cda49d793524f2ea3cf96899fc29891aee652e0c265149e2fee170cd44424"' }>
                                        <li class="link">
                                            <a href="injectables/DescriptionUnitsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DescriptionUnitsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/EmailModule.html" data-type="entity-link" >EmailModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-EmailModule-20181a4c29a4ea10aaba77e9833aa62f2e78a2519ecea1ca0e85c9f6f775338b463a1b1813e02d09c296b81736e86300b39483b5967541bb9bc796432ec199a7"' : 'data-bs-target="#xs-injectables-links-module-EmailModule-20181a4c29a4ea10aaba77e9833aa62f2e78a2519ecea1ca0e85c9f6f775338b463a1b1813e02d09c296b81736e86300b39483b5967541bb9bc796432ec199a7"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-EmailModule-20181a4c29a4ea10aaba77e9833aa62f2e78a2519ecea1ca0e85c9f6f775338b463a1b1813e02d09c296b81736e86300b39483b5967541bb9bc796432ec199a7"' :
                                        'id="xs-injectables-links-module-EmailModule-20181a4c29a4ea10aaba77e9833aa62f2e78a2519ecea1ca0e85c9f6f775338b463a1b1813e02d09c296b81736e86300b39483b5967541bb9bc796432ec199a7"' }>
                                        <li class="link">
                                            <a href="injectables/EmailNodemailerService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EmailNodemailerService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/EmailsModule.html" data-type="entity-link" >EmailsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-EmailsModule-d11a216878a2d5666a90287c0c64afa6f0ee6154ffa70908542629f0e6db9e86ca9dfda82cb5e3a645c19667120990a9721f4b36b7bfbc5f46329c135604738a"' : 'data-bs-target="#xs-controllers-links-module-EmailsModule-d11a216878a2d5666a90287c0c64afa6f0ee6154ffa70908542629f0e6db9e86ca9dfda82cb5e3a645c19667120990a9721f4b36b7bfbc5f46329c135604738a"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-EmailsModule-d11a216878a2d5666a90287c0c64afa6f0ee6154ffa70908542629f0e6db9e86ca9dfda82cb5e3a645c19667120990a9721f4b36b7bfbc5f46329c135604738a"' :
                                            'id="xs-controllers-links-module-EmailsModule-d11a216878a2d5666a90287c0c64afa6f0ee6154ffa70908542629f0e6db9e86ca9dfda82cb5e3a645c19667120990a9721f4b36b7bfbc5f46329c135604738a"' }>
                                            <li class="link">
                                                <a href="controllers/EmailsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EmailsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-EmailsModule-d11a216878a2d5666a90287c0c64afa6f0ee6154ffa70908542629f0e6db9e86ca9dfda82cb5e3a645c19667120990a9721f4b36b7bfbc5f46329c135604738a"' : 'data-bs-target="#xs-injectables-links-module-EmailsModule-d11a216878a2d5666a90287c0c64afa6f0ee6154ffa70908542629f0e6db9e86ca9dfda82cb5e3a645c19667120990a9721f4b36b7bfbc5f46329c135604738a"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-EmailsModule-d11a216878a2d5666a90287c0c64afa6f0ee6154ffa70908542629f0e6db9e86ca9dfda82cb5e3a645c19667120990a9721f4b36b7bfbc5f46329c135604738a"' :
                                        'id="xs-injectables-links-module-EmailsModule-d11a216878a2d5666a90287c0c64afa6f0ee6154ffa70908542629f0e6db9e86ca9dfda82cb5e3a645c19667120990a9721f4b36b7bfbc5f46329c135604738a"' }>
                                        <li class="link">
                                            <a href="injectables/EmailsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EmailsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/EntryAndLocationRecordModule.html" data-type="entity-link" >EntryAndLocationRecordModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-EntryAndLocationRecordModule-fed302192844d7a280431a456e8b5609bbef1c7d7be7747fbed8d4bac9b1542a200074a18e6646f815200e3d2f29bf10119347898229050f68135f5170f8cfa2"' : 'data-bs-target="#xs-controllers-links-module-EntryAndLocationRecordModule-fed302192844d7a280431a456e8b5609bbef1c7d7be7747fbed8d4bac9b1542a200074a18e6646f815200e3d2f29bf10119347898229050f68135f5170f8cfa2"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-EntryAndLocationRecordModule-fed302192844d7a280431a456e8b5609bbef1c7d7be7747fbed8d4bac9b1542a200074a18e6646f815200e3d2f29bf10119347898229050f68135f5170f8cfa2"' :
                                            'id="xs-controllers-links-module-EntryAndLocationRecordModule-fed302192844d7a280431a456e8b5609bbef1c7d7be7747fbed8d4bac9b1542a200074a18e6646f815200e3d2f29bf10119347898229050f68135f5170f8cfa2"' }>
                                            <li class="link">
                                                <a href="controllers/EntryAndLocationRecordController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EntryAndLocationRecordController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-EntryAndLocationRecordModule-fed302192844d7a280431a456e8b5609bbef1c7d7be7747fbed8d4bac9b1542a200074a18e6646f815200e3d2f29bf10119347898229050f68135f5170f8cfa2"' : 'data-bs-target="#xs-injectables-links-module-EntryAndLocationRecordModule-fed302192844d7a280431a456e8b5609bbef1c7d7be7747fbed8d4bac9b1542a200074a18e6646f815200e3d2f29bf10119347898229050f68135f5170f8cfa2"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-EntryAndLocationRecordModule-fed302192844d7a280431a456e8b5609bbef1c7d7be7747fbed8d4bac9b1542a200074a18e6646f815200e3d2f29bf10119347898229050f68135f5170f8cfa2"' :
                                        'id="xs-injectables-links-module-EntryAndLocationRecordModule-fed302192844d7a280431a456e8b5609bbef1c7d7be7747fbed8d4bac9b1542a200074a18e6646f815200e3d2f29bf10119347898229050f68135f5170f8cfa2"' }>
                                        <li class="link">
                                            <a href="injectables/EntryAndLocationRecordService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EntryAndLocationRecordService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ExtraInformationModule.html" data-type="entity-link" >ExtraInformationModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-ExtraInformationModule-6361726c50c457d58854a92081bbdd1a082f5e10661927021f1bdefd38e18db2ee4774d5cfb61d644814c493c8cfe3d84a289336d4e6a88a82b1e7f7d4dd4aa2"' : 'data-bs-target="#xs-controllers-links-module-ExtraInformationModule-6361726c50c457d58854a92081bbdd1a082f5e10661927021f1bdefd38e18db2ee4774d5cfb61d644814c493c8cfe3d84a289336d4e6a88a82b1e7f7d4dd4aa2"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ExtraInformationModule-6361726c50c457d58854a92081bbdd1a082f5e10661927021f1bdefd38e18db2ee4774d5cfb61d644814c493c8cfe3d84a289336d4e6a88a82b1e7f7d4dd4aa2"' :
                                            'id="xs-controllers-links-module-ExtraInformationModule-6361726c50c457d58854a92081bbdd1a082f5e10661927021f1bdefd38e18db2ee4774d5cfb61d644814c493c8cfe3d84a289336d4e6a88a82b1e7f7d4dd4aa2"' }>
                                            <li class="link">
                                                <a href="controllers/ExtraInformationController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ExtraInformationController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ExtraInformationModule-6361726c50c457d58854a92081bbdd1a082f5e10661927021f1bdefd38e18db2ee4774d5cfb61d644814c493c8cfe3d84a289336d4e6a88a82b1e7f7d4dd4aa2"' : 'data-bs-target="#xs-injectables-links-module-ExtraInformationModule-6361726c50c457d58854a92081bbdd1a082f5e10661927021f1bdefd38e18db2ee4774d5cfb61d644814c493c8cfe3d84a289336d4e6a88a82b1e7f7d4dd4aa2"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ExtraInformationModule-6361726c50c457d58854a92081bbdd1a082f5e10661927021f1bdefd38e18db2ee4774d5cfb61d644814c493c8cfe3d84a289336d4e6a88a82b1e7f7d4dd4aa2"' :
                                        'id="xs-injectables-links-module-ExtraInformationModule-6361726c50c457d58854a92081bbdd1a082f5e10661927021f1bdefd38e18db2ee4774d5cfb61d644814c493c8cfe3d84a289336d4e6a88a82b1e7f7d4dd4aa2"' }>
                                        <li class="link">
                                            <a href="injectables/ExtraInformationService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ExtraInformationService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/FieldReviewStatusModule.html" data-type="entity-link" >FieldReviewStatusModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-FieldReviewStatusModule-a98d339307228d7eb6257253c39bb46355b5979dfd6bba2e7f5ec3866a998b02c933f11810f51396e103580d068b6cf5468a5581b8efb8f2f7e0e9b82b6c942d"' : 'data-bs-target="#xs-controllers-links-module-FieldReviewStatusModule-a98d339307228d7eb6257253c39bb46355b5979dfd6bba2e7f5ec3866a998b02c933f11810f51396e103580d068b6cf5468a5581b8efb8f2f7e0e9b82b6c942d"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-FieldReviewStatusModule-a98d339307228d7eb6257253c39bb46355b5979dfd6bba2e7f5ec3866a998b02c933f11810f51396e103580d068b6cf5468a5581b8efb8f2f7e0e9b82b6c942d"' :
                                            'id="xs-controllers-links-module-FieldReviewStatusModule-a98d339307228d7eb6257253c39bb46355b5979dfd6bba2e7f5ec3866a998b02c933f11810f51396e103580d068b6cf5468a5581b8efb8f2f7e0e9b82b6c942d"' }>
                                            <li class="link">
                                                <a href="controllers/FieldReviewStatusController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FieldReviewStatusController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-FieldReviewStatusModule-a98d339307228d7eb6257253c39bb46355b5979dfd6bba2e7f5ec3866a998b02c933f11810f51396e103580d068b6cf5468a5581b8efb8f2f7e0e9b82b6c942d"' : 'data-bs-target="#xs-injectables-links-module-FieldReviewStatusModule-a98d339307228d7eb6257253c39bb46355b5979dfd6bba2e7f5ec3866a998b02c933f11810f51396e103580d068b6cf5468a5581b8efb8f2f7e0e9b82b6c942d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-FieldReviewStatusModule-a98d339307228d7eb6257253c39bb46355b5979dfd6bba2e7f5ec3866a998b02c933f11810f51396e103580d068b6cf5468a5581b8efb8f2f7e0e9b82b6c942d"' :
                                        'id="xs-injectables-links-module-FieldReviewStatusModule-a98d339307228d7eb6257253c39bb46355b5979dfd6bba2e7f5ec3866a998b02c933f11810f51396e103580d068b6cf5468a5581b8efb8f2f7e0e9b82b6c942d"' }>
                                        <li class="link">
                                            <a href="injectables/FieldReviewStatusService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FieldReviewStatusService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/FileStorageModule.html" data-type="entity-link" >FileStorageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-FileStorageModule-2edaa37f6a55624fe174cbc93e19effde0418a231bb25d4528c0f81def34566dc62d36d809cfdb79bd33c5bc3c065d130a93137bab5d7bf95893108a0788e884"' : 'data-bs-target="#xs-controllers-links-module-FileStorageModule-2edaa37f6a55624fe174cbc93e19effde0418a231bb25d4528c0f81def34566dc62d36d809cfdb79bd33c5bc3c065d130a93137bab5d7bf95893108a0788e884"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-FileStorageModule-2edaa37f6a55624fe174cbc93e19effde0418a231bb25d4528c0f81def34566dc62d36d809cfdb79bd33c5bc3c065d130a93137bab5d7bf95893108a0788e884"' :
                                            'id="xs-controllers-links-module-FileStorageModule-2edaa37f6a55624fe174cbc93e19effde0418a231bb25d4528c0f81def34566dc62d36d809cfdb79bd33c5bc3c065d130a93137bab5d7bf95893108a0788e884"' }>
                                            <li class="link">
                                                <a href="controllers/FileStorageController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FileStorageController</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HandledErrorModule.html" data-type="entity-link" >HandledErrorModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HeritageOfficesModule.html" data-type="entity-link" >HeritageOfficesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-HeritageOfficesModule-295832f12237a06592d67d91bad1000694cf023a6baaff1ca023ebc0082d91f483021c0664a743c44e726083be94dcf64ff601e052281ea81d17fabc50f25628"' : 'data-bs-target="#xs-controllers-links-module-HeritageOfficesModule-295832f12237a06592d67d91bad1000694cf023a6baaff1ca023ebc0082d91f483021c0664a743c44e726083be94dcf64ff601e052281ea81d17fabc50f25628"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-HeritageOfficesModule-295832f12237a06592d67d91bad1000694cf023a6baaff1ca023ebc0082d91f483021c0664a743c44e726083be94dcf64ff601e052281ea81d17fabc50f25628"' :
                                            'id="xs-controllers-links-module-HeritageOfficesModule-295832f12237a06592d67d91bad1000694cf023a6baaff1ca023ebc0082d91f483021c0664a743c44e726083be94dcf64ff601e052281ea81d17fabc50f25628"' }>
                                            <li class="link">
                                                <a href="controllers/HeritageOfficesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeritageOfficesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-HeritageOfficesModule-295832f12237a06592d67d91bad1000694cf023a6baaff1ca023ebc0082d91f483021c0664a743c44e726083be94dcf64ff601e052281ea81d17fabc50f25628"' : 'data-bs-target="#xs-injectables-links-module-HeritageOfficesModule-295832f12237a06592d67d91bad1000694cf023a6baaff1ca023ebc0082d91f483021c0664a743c44e726083be94dcf64ff601e052281ea81d17fabc50f25628"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-HeritageOfficesModule-295832f12237a06592d67d91bad1000694cf023a6baaff1ca023ebc0082d91f483021c0664a743c44e726083be94dcf64ff601e052281ea81d17fabc50f25628"' :
                                        'id="xs-injectables-links-module-HeritageOfficesModule-295832f12237a06592d67d91bad1000694cf023a6baaff1ca023ebc0082d91f483021c0664a743c44e726083be94dcf64ff601e052281ea81d17fabc50f25628"' }>
                                        <li class="link">
                                            <a href="injectables/HeritageOfficesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeritageOfficesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/InstitutionCategoriesModule.html" data-type="entity-link" >InstitutionCategoriesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-InstitutionCategoriesModule-263a988a055a2a9b458baec49eaa1c30a4c7681aaf66cbb9e1c7a38031109af2f83ac69d083171401d1b8a18c9363111fc40b4a7a0b144f3afdcc91f3635197b"' : 'data-bs-target="#xs-controllers-links-module-InstitutionCategoriesModule-263a988a055a2a9b458baec49eaa1c30a4c7681aaf66cbb9e1c7a38031109af2f83ac69d083171401d1b8a18c9363111fc40b4a7a0b144f3afdcc91f3635197b"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-InstitutionCategoriesModule-263a988a055a2a9b458baec49eaa1c30a4c7681aaf66cbb9e1c7a38031109af2f83ac69d083171401d1b8a18c9363111fc40b4a7a0b144f3afdcc91f3635197b"' :
                                            'id="xs-controllers-links-module-InstitutionCategoriesModule-263a988a055a2a9b458baec49eaa1c30a4c7681aaf66cbb9e1c7a38031109af2f83ac69d083171401d1b8a18c9363111fc40b4a7a0b144f3afdcc91f3635197b"' }>
                                            <li class="link">
                                                <a href="controllers/InstitutionCategoriesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InstitutionCategoriesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-InstitutionCategoriesModule-263a988a055a2a9b458baec49eaa1c30a4c7681aaf66cbb9e1c7a38031109af2f83ac69d083171401d1b8a18c9363111fc40b4a7a0b144f3afdcc91f3635197b"' : 'data-bs-target="#xs-injectables-links-module-InstitutionCategoriesModule-263a988a055a2a9b458baec49eaa1c30a4c7681aaf66cbb9e1c7a38031109af2f83ac69d083171401d1b8a18c9363111fc40b4a7a0b144f3afdcc91f3635197b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-InstitutionCategoriesModule-263a988a055a2a9b458baec49eaa1c30a4c7681aaf66cbb9e1c7a38031109af2f83ac69d083171401d1b8a18c9363111fc40b4a7a0b144f3afdcc91f3635197b"' :
                                        'id="xs-injectables-links-module-InstitutionCategoriesModule-263a988a055a2a9b458baec49eaa1c30a4c7681aaf66cbb9e1c7a38031109af2f83ac69d083171401d1b8a18c9363111fc40b4a7a0b144f3afdcc91f3635197b"' }>
                                        <li class="link">
                                            <a href="injectables/InstitutionCategoriesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InstitutionCategoriesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/InstitutionsModule.html" data-type="entity-link" >InstitutionsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-InstitutionsModule-9e6216077ca6d8a1a27501279e8d9b5314f4d53c66d5d2d216f21fa63d2af988bce5c8834d0354dfd1b0e04891d44dd4c63ffd89b1685757321ab39ce2d1cc88"' : 'data-bs-target="#xs-controllers-links-module-InstitutionsModule-9e6216077ca6d8a1a27501279e8d9b5314f4d53c66d5d2d216f21fa63d2af988bce5c8834d0354dfd1b0e04891d44dd4c63ffd89b1685757321ab39ce2d1cc88"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-InstitutionsModule-9e6216077ca6d8a1a27501279e8d9b5314f4d53c66d5d2d216f21fa63d2af988bce5c8834d0354dfd1b0e04891d44dd4c63ffd89b1685757321ab39ce2d1cc88"' :
                                            'id="xs-controllers-links-module-InstitutionsModule-9e6216077ca6d8a1a27501279e8d9b5314f4d53c66d5d2d216f21fa63d2af988bce5c8834d0354dfd1b0e04891d44dd4c63ffd89b1685757321ab39ce2d1cc88"' }>
                                            <li class="link">
                                                <a href="controllers/InstitutionsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InstitutionsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-InstitutionsModule-9e6216077ca6d8a1a27501279e8d9b5314f4d53c66d5d2d216f21fa63d2af988bce5c8834d0354dfd1b0e04891d44dd4c63ffd89b1685757321ab39ce2d1cc88"' : 'data-bs-target="#xs-injectables-links-module-InstitutionsModule-9e6216077ca6d8a1a27501279e8d9b5314f4d53c66d5d2d216f21fa63d2af988bce5c8834d0354dfd1b0e04891d44dd4c63ffd89b1685757321ab39ce2d1cc88"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-InstitutionsModule-9e6216077ca6d8a1a27501279e8d9b5314f4d53c66d5d2d216f21fa63d2af988bce5c8834d0354dfd1b0e04891d44dd4c63ffd89b1685757321ab39ce2d1cc88"' :
                                        'id="xs-injectables-links-module-InstitutionsModule-9e6216077ca6d8a1a27501279e8d9b5314f4d53c66d5d2d216f21fa63d2af988bce5c8834d0354dfd1b0e04891d44dd4c63ffd89b1685757321ab39ce2d1cc88"' }>
                                        <li class="link">
                                            <a href="injectables/InstitutionsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InstitutionsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/InstitutionTypesModule.html" data-type="entity-link" >InstitutionTypesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-InstitutionTypesModule-0d781114356f33b93884877c3f8bc90e2cfb580d5d41de421f9b5710323dcb897b978e396f2443f21c2da50c769ab9aa6b5ffea4a44c7d078ec8da2f9584bac4"' : 'data-bs-target="#xs-controllers-links-module-InstitutionTypesModule-0d781114356f33b93884877c3f8bc90e2cfb580d5d41de421f9b5710323dcb897b978e396f2443f21c2da50c769ab9aa6b5ffea4a44c7d078ec8da2f9584bac4"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-InstitutionTypesModule-0d781114356f33b93884877c3f8bc90e2cfb580d5d41de421f9b5710323dcb897b978e396f2443f21c2da50c769ab9aa6b5ffea4a44c7d078ec8da2f9584bac4"' :
                                            'id="xs-controllers-links-module-InstitutionTypesModule-0d781114356f33b93884877c3f8bc90e2cfb580d5d41de421f9b5710323dcb897b978e396f2443f21c2da50c769ab9aa6b5ffea4a44c7d078ec8da2f9584bac4"' }>
                                            <li class="link">
                                                <a href="controllers/InstitutionTypesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InstitutionTypesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-InstitutionTypesModule-0d781114356f33b93884877c3f8bc90e2cfb580d5d41de421f9b5710323dcb897b978e396f2443f21c2da50c769ab9aa6b5ffea4a44c7d078ec8da2f9584bac4"' : 'data-bs-target="#xs-injectables-links-module-InstitutionTypesModule-0d781114356f33b93884877c3f8bc90e2cfb580d5d41de421f9b5710323dcb897b978e396f2443f21c2da50c769ab9aa6b5ffea4a44c7d078ec8da2f9584bac4"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-InstitutionTypesModule-0d781114356f33b93884877c3f8bc90e2cfb580d5d41de421f9b5710323dcb897b978e396f2443f21c2da50c769ab9aa6b5ffea4a44c7d078ec8da2f9584bac4"' :
                                        'id="xs-injectables-links-module-InstitutionTypesModule-0d781114356f33b93884877c3f8bc90e2cfb580d5d41de421f9b5710323dcb897b978e396f2443f21c2da50c769ab9aa6b5ffea4a44c7d078ec8da2f9584bac4"' }>
                                        <li class="link">
                                            <a href="injectables/InstitutionTypesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InstitutionTypesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/LoggerModule.html" data-type="entity-link" >LoggerModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-LoggerModule-bb0f2a81e49acfa25e1f46933eb042f8c0cc36a33b615a031eccefed9e79497f8b23efa2c3a3c9f2d4e482906159ad10b2b4da3d6802f46dc5732f6945812402"' : 'data-bs-target="#xs-injectables-links-module-LoggerModule-bb0f2a81e49acfa25e1f46933eb042f8c0cc36a33b615a031eccefed9e79497f8b23efa2c3a3c9f2d4e482906159ad10b2b4da3d6802f46dc5732f6945812402"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-LoggerModule-bb0f2a81e49acfa25e1f46933eb042f8c0cc36a33b615a031eccefed9e79497f8b23efa2c3a3c9f2d4e482906159ad10b2b4da3d6802f46dc5732f6945812402"' :
                                        'id="xs-injectables-links-module-LoggerModule-bb0f2a81e49acfa25e1f46933eb042f8c0cc36a33b615a031eccefed9e79497f8b23efa2c3a3c9f2d4e482906159ad10b2b4da3d6802f46dc5732f6945812402"' }>
                                        <li class="link">
                                            <a href="injectables/PinoConfigService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PinoConfigService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/MunicipalityModule.html" data-type="entity-link" >MunicipalityModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-MunicipalityModule-aeaa9dd9221c2d35566e193662794630cd854a1abcdda88e2ab495465e1ea6b160831534952333e216b22a6f696ec126c84bcb8882cc3bcaaecdeb241fe76452"' : 'data-bs-target="#xs-controllers-links-module-MunicipalityModule-aeaa9dd9221c2d35566e193662794630cd854a1abcdda88e2ab495465e1ea6b160831534952333e216b22a6f696ec126c84bcb8882cc3bcaaecdeb241fe76452"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-MunicipalityModule-aeaa9dd9221c2d35566e193662794630cd854a1abcdda88e2ab495465e1ea6b160831534952333e216b22a6f696ec126c84bcb8882cc3bcaaecdeb241fe76452"' :
                                            'id="xs-controllers-links-module-MunicipalityModule-aeaa9dd9221c2d35566e193662794630cd854a1abcdda88e2ab495465e1ea6b160831534952333e216b22a6f696ec126c84bcb8882cc3bcaaecdeb241fe76452"' }>
                                            <li class="link">
                                                <a href="controllers/MunicipalityController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MunicipalityController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-MunicipalityModule-aeaa9dd9221c2d35566e193662794630cd854a1abcdda88e2ab495465e1ea6b160831534952333e216b22a6f696ec126c84bcb8882cc3bcaaecdeb241fe76452"' : 'data-bs-target="#xs-injectables-links-module-MunicipalityModule-aeaa9dd9221c2d35566e193662794630cd854a1abcdda88e2ab495465e1ea6b160831534952333e216b22a6f696ec126c84bcb8882cc3bcaaecdeb241fe76452"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-MunicipalityModule-aeaa9dd9221c2d35566e193662794630cd854a1abcdda88e2ab495465e1ea6b160831534952333e216b22a6f696ec126c84bcb8882cc3bcaaecdeb241fe76452"' :
                                        'id="xs-injectables-links-module-MunicipalityModule-aeaa9dd9221c2d35566e193662794630cd854a1abcdda88e2ab495465e1ea6b160831534952333e216b22a6f696ec126c84bcb8882cc3bcaaecdeb241fe76452"' }>
                                        <li class="link">
                                            <a href="injectables/MunicipalityService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MunicipalityService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/MuseumTypesModule.html" data-type="entity-link" >MuseumTypesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-MuseumTypesModule-746420c7aa49a7e4f1a4bdeedfa7c3f46d0c315446e847215ae835b0401776bef95870396c04fb5ab1711ac9256a0e280bd1190205d7c13c851b30057f277f9d"' : 'data-bs-target="#xs-controllers-links-module-MuseumTypesModule-746420c7aa49a7e4f1a4bdeedfa7c3f46d0c315446e847215ae835b0401776bef95870396c04fb5ab1711ac9256a0e280bd1190205d7c13c851b30057f277f9d"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-MuseumTypesModule-746420c7aa49a7e4f1a4bdeedfa7c3f46d0c315446e847215ae835b0401776bef95870396c04fb5ab1711ac9256a0e280bd1190205d7c13c851b30057f277f9d"' :
                                            'id="xs-controllers-links-module-MuseumTypesModule-746420c7aa49a7e4f1a4bdeedfa7c3f46d0c315446e847215ae835b0401776bef95870396c04fb5ab1711ac9256a0e280bd1190205d7c13c851b30057f277f9d"' }>
                                            <li class="link">
                                                <a href="controllers/MuseumTypesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MuseumTypesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-MuseumTypesModule-746420c7aa49a7e4f1a4bdeedfa7c3f46d0c315446e847215ae835b0401776bef95870396c04fb5ab1711ac9256a0e280bd1190205d7c13c851b30057f277f9d"' : 'data-bs-target="#xs-injectables-links-module-MuseumTypesModule-746420c7aa49a7e4f1a4bdeedfa7c3f46d0c315446e847215ae835b0401776bef95870396c04fb5ab1711ac9256a0e280bd1190205d7c13c851b30057f277f9d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-MuseumTypesModule-746420c7aa49a7e4f1a4bdeedfa7c3f46d0c315446e847215ae835b0401776bef95870396c04fb5ab1711ac9256a0e280bd1190205d7c13c851b30057f277f9d"' :
                                        'id="xs-injectables-links-module-MuseumTypesModule-746420c7aa49a7e4f1a4bdeedfa7c3f46d0c315446e847215ae835b0401776bef95870396c04fb5ab1711ac9256a0e280bd1190205d7c13c851b30057f277f9d"' }>
                                        <li class="link">
                                            <a href="injectables/MuseumTypesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MuseumTypesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/NomenclatureModule.html" data-type="entity-link" >NomenclatureModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/NotesModule.html" data-type="entity-link" >NotesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-NotesModule-5906d27b4fc4c53081ea9aecf3a80855d846ee302c23dec0b2dfcf6cac731c19eba2d994af66033ed267cd03bf150191ed56ba5149b9032de03173b6b7485e84"' : 'data-bs-target="#xs-controllers-links-module-NotesModule-5906d27b4fc4c53081ea9aecf3a80855d846ee302c23dec0b2dfcf6cac731c19eba2d994af66033ed267cd03bf150191ed56ba5149b9032de03173b6b7485e84"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-NotesModule-5906d27b4fc4c53081ea9aecf3a80855d846ee302c23dec0b2dfcf6cac731c19eba2d994af66033ed267cd03bf150191ed56ba5149b9032de03173b6b7485e84"' :
                                            'id="xs-controllers-links-module-NotesModule-5906d27b4fc4c53081ea9aecf3a80855d846ee302c23dec0b2dfcf6cac731c19eba2d994af66033ed267cd03bf150191ed56ba5149b9032de03173b6b7485e84"' }>
                                            <li class="link">
                                                <a href="controllers/NotesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NotesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-NotesModule-5906d27b4fc4c53081ea9aecf3a80855d846ee302c23dec0b2dfcf6cac731c19eba2d994af66033ed267cd03bf150191ed56ba5149b9032de03173b6b7485e84"' : 'data-bs-target="#xs-injectables-links-module-NotesModule-5906d27b4fc4c53081ea9aecf3a80855d846ee302c23dec0b2dfcf6cac731c19eba2d994af66033ed267cd03bf150191ed56ba5149b9032de03173b6b7485e84"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-NotesModule-5906d27b4fc4c53081ea9aecf3a80855d846ee302c23dec0b2dfcf6cac731c19eba2d994af66033ed267cd03bf150191ed56ba5149b9032de03173b6b7485e84"' :
                                        'id="xs-injectables-links-module-NotesModule-5906d27b4fc4c53081ea9aecf3a80855d846ee302c23dec0b2dfcf6cac731c19eba2d994af66033ed267cd03bf150191ed56ba5149b9032de03173b6b7485e84"' }>
                                        <li class="link">
                                            <a href="injectables/NotesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NotesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PhoneNumbersModule.html" data-type="entity-link" >PhoneNumbersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PhoneNumbersModule-ab8d4a384bfd3d547520e12c223d09893269a5bbde93852f3303c93e1b26a8e76f2cd3651ec9b544e3ea8422809662b87d9e26a818102120546e92c5a2710526"' : 'data-bs-target="#xs-controllers-links-module-PhoneNumbersModule-ab8d4a384bfd3d547520e12c223d09893269a5bbde93852f3303c93e1b26a8e76f2cd3651ec9b544e3ea8422809662b87d9e26a818102120546e92c5a2710526"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PhoneNumbersModule-ab8d4a384bfd3d547520e12c223d09893269a5bbde93852f3303c93e1b26a8e76f2cd3651ec9b544e3ea8422809662b87d9e26a818102120546e92c5a2710526"' :
                                            'id="xs-controllers-links-module-PhoneNumbersModule-ab8d4a384bfd3d547520e12c223d09893269a5bbde93852f3303c93e1b26a8e76f2cd3651ec9b544e3ea8422809662b87d9e26a818102120546e92c5a2710526"' }>
                                            <li class="link">
                                                <a href="controllers/PhoneNumbersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PhoneNumbersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PhoneNumbersModule-ab8d4a384bfd3d547520e12c223d09893269a5bbde93852f3303c93e1b26a8e76f2cd3651ec9b544e3ea8422809662b87d9e26a818102120546e92c5a2710526"' : 'data-bs-target="#xs-injectables-links-module-PhoneNumbersModule-ab8d4a384bfd3d547520e12c223d09893269a5bbde93852f3303c93e1b26a8e76f2cd3651ec9b544e3ea8422809662b87d9e26a818102120546e92c5a2710526"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PhoneNumbersModule-ab8d4a384bfd3d547520e12c223d09893269a5bbde93852f3303c93e1b26a8e76f2cd3651ec9b544e3ea8422809662b87d9e26a818102120546e92c5a2710526"' :
                                        'id="xs-injectables-links-module-PhoneNumbersModule-ab8d4a384bfd3d547520e12c223d09893269a5bbde93852f3303c93e1b26a8e76f2cd3651ec9b544e3ea8422809662b87d9e26a818102120546e92c5a2710526"' }>
                                        <li class="link">
                                            <a href="injectables/PhoneNumbersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PhoneNumbersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProducerAuthorRecordModule.html" data-type="entity-link" >ProducerAuthorRecordModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-ProducerAuthorRecordModule-dda3b0f54b492252b8ed0898b68afa31562f6a2996aaff573d4a6a3634c24343c2e8f655a446c084fa3d3e220fd87ea7307193562743248d9e48e611d2361d90"' : 'data-bs-target="#xs-controllers-links-module-ProducerAuthorRecordModule-dda3b0f54b492252b8ed0898b68afa31562f6a2996aaff573d4a6a3634c24343c2e8f655a446c084fa3d3e220fd87ea7307193562743248d9e48e611d2361d90"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ProducerAuthorRecordModule-dda3b0f54b492252b8ed0898b68afa31562f6a2996aaff573d4a6a3634c24343c2e8f655a446c084fa3d3e220fd87ea7307193562743248d9e48e611d2361d90"' :
                                            'id="xs-controllers-links-module-ProducerAuthorRecordModule-dda3b0f54b492252b8ed0898b68afa31562f6a2996aaff573d4a6a3634c24343c2e8f655a446c084fa3d3e220fd87ea7307193562743248d9e48e611d2361d90"' }>
                                            <li class="link">
                                                <a href="controllers/ProducerAuthorRecordController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProducerAuthorRecordController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ProducerAuthorRecordModule-dda3b0f54b492252b8ed0898b68afa31562f6a2996aaff573d4a6a3634c24343c2e8f655a446c084fa3d3e220fd87ea7307193562743248d9e48e611d2361d90"' : 'data-bs-target="#xs-injectables-links-module-ProducerAuthorRecordModule-dda3b0f54b492252b8ed0898b68afa31562f6a2996aaff573d4a6a3634c24343c2e8f655a446c084fa3d3e220fd87ea7307193562743248d9e48e611d2361d90"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ProducerAuthorRecordModule-dda3b0f54b492252b8ed0898b68afa31562f6a2996aaff573d4a6a3634c24343c2e8f655a446c084fa3d3e220fd87ea7307193562743248d9e48e611d2361d90"' :
                                        'id="xs-injectables-links-module-ProducerAuthorRecordModule-dda3b0f54b492252b8ed0898b68afa31562f6a2996aaff573d4a6a3634c24343c2e8f655a446c084fa3d3e220fd87ea7307193562743248d9e48e611d2361d90"' }>
                                        <li class="link">
                                            <a href="injectables/ProducerAuthorRecordService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProducerAuthorRecordService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProvinceModule.html" data-type="entity-link" >ProvinceModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-ProvinceModule-ef819396edf57d0c41fe8d49ebd90c715c3be6aa6a40089c9f79671092125a6f66c495501a338171f0b2da1bee6433eb4ad6ed39b21eaa3c27ebab01517bd9f1"' : 'data-bs-target="#xs-controllers-links-module-ProvinceModule-ef819396edf57d0c41fe8d49ebd90c715c3be6aa6a40089c9f79671092125a6f66c495501a338171f0b2da1bee6433eb4ad6ed39b21eaa3c27ebab01517bd9f1"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ProvinceModule-ef819396edf57d0c41fe8d49ebd90c715c3be6aa6a40089c9f79671092125a6f66c495501a338171f0b2da1bee6433eb4ad6ed39b21eaa3c27ebab01517bd9f1"' :
                                            'id="xs-controllers-links-module-ProvinceModule-ef819396edf57d0c41fe8d49ebd90c715c3be6aa6a40089c9f79671092125a6f66c495501a338171f0b2da1bee6433eb4ad6ed39b21eaa3c27ebab01517bd9f1"' }>
                                            <li class="link">
                                                <a href="controllers/ProvinceController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProvinceController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ProvinceModule-ef819396edf57d0c41fe8d49ebd90c715c3be6aa6a40089c9f79671092125a6f66c495501a338171f0b2da1bee6433eb4ad6ed39b21eaa3c27ebab01517bd9f1"' : 'data-bs-target="#xs-injectables-links-module-ProvinceModule-ef819396edf57d0c41fe8d49ebd90c715c3be6aa6a40089c9f79671092125a6f66c495501a338171f0b2da1bee6433eb4ad6ed39b21eaa3c27ebab01517bd9f1"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ProvinceModule-ef819396edf57d0c41fe8d49ebd90c715c3be6aa6a40089c9f79671092125a6f66c495501a338171f0b2da1bee6433eb4ad6ed39b21eaa3c27ebab01517bd9f1"' :
                                        'id="xs-injectables-links-module-ProvinceModule-ef819396edf57d0c41fe8d49ebd90c715c3be6aa6a40089c9f79671092125a6f66c495501a338171f0b2da1bee6433eb4ad6ed39b21eaa3c27ebab01517bd9f1"' }>
                                        <li class="link">
                                            <a href="injectables/ProvinceService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProvinceService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ReeupCodeModule.html" data-type="entity-link" >ReeupCodeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-ReeupCodeModule-1f330a3313965b34bd5548e10628b3885846b7e9d4049c383a54c3c90c307c4c5bb7b3b754c3a54a493664261508e953ca61293134dbc717911550deafe2da40"' : 'data-bs-target="#xs-controllers-links-module-ReeupCodeModule-1f330a3313965b34bd5548e10628b3885846b7e9d4049c383a54c3c90c307c4c5bb7b3b754c3a54a493664261508e953ca61293134dbc717911550deafe2da40"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ReeupCodeModule-1f330a3313965b34bd5548e10628b3885846b7e9d4049c383a54c3c90c307c4c5bb7b3b754c3a54a493664261508e953ca61293134dbc717911550deafe2da40"' :
                                            'id="xs-controllers-links-module-ReeupCodeModule-1f330a3313965b34bd5548e10628b3885846b7e9d4049c383a54c3c90c307c4c5bb7b3b754c3a54a493664261508e953ca61293134dbc717911550deafe2da40"' }>
                                            <li class="link">
                                                <a href="controllers/ReeupCodeController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReeupCodeController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ReeupCodeModule-1f330a3313965b34bd5548e10628b3885846b7e9d4049c383a54c3c90c307c4c5bb7b3b754c3a54a493664261508e953ca61293134dbc717911550deafe2da40"' : 'data-bs-target="#xs-injectables-links-module-ReeupCodeModule-1f330a3313965b34bd5548e10628b3885846b7e9d4049c383a54c3c90c307c4c5bb7b3b754c3a54a493664261508e953ca61293134dbc717911550deafe2da40"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ReeupCodeModule-1f330a3313965b34bd5548e10628b3885846b7e9d4049c383a54c3c90c307c4c5bb7b3b754c3a54a493664261508e953ca61293134dbc717911550deafe2da40"' :
                                        'id="xs-injectables-links-module-ReeupCodeModule-1f330a3313965b34bd5548e10628b3885846b7e9d4049c383a54c3c90c307c4c5bb7b3b754c3a54a493664261508e953ca61293134dbc717911550deafe2da40"' }>
                                        <li class="link">
                                            <a href="injectables/ReeupCodeService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReeupCodeService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ReportsModule.html" data-type="entity-link" >ReportsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-ReportsModule-5c59ef759c8942c54c49396e31227505ee5fbd55d40d1f73a98c5e66083ddfe6d1ed1082a58b4dd7ab483e9be02158625a1f9704683a539d397e5eae6c36966c"' : 'data-bs-target="#xs-controllers-links-module-ReportsModule-5c59ef759c8942c54c49396e31227505ee5fbd55d40d1f73a98c5e66083ddfe6d1ed1082a58b4dd7ab483e9be02158625a1f9704683a539d397e5eae6c36966c"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ReportsModule-5c59ef759c8942c54c49396e31227505ee5fbd55d40d1f73a98c5e66083ddfe6d1ed1082a58b4dd7ab483e9be02158625a1f9704683a539d397e5eae6c36966c"' :
                                            'id="xs-controllers-links-module-ReportsModule-5c59ef759c8942c54c49396e31227505ee5fbd55d40d1f73a98c5e66083ddfe6d1ed1082a58b4dd7ab483e9be02158625a1f9704683a539d397e5eae6c36966c"' }>
                                            <li class="link">
                                                <a href="controllers/ReportsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReportsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ReportsModule-5c59ef759c8942c54c49396e31227505ee5fbd55d40d1f73a98c5e66083ddfe6d1ed1082a58b4dd7ab483e9be02158625a1f9704683a539d397e5eae6c36966c"' : 'data-bs-target="#xs-injectables-links-module-ReportsModule-5c59ef759c8942c54c49396e31227505ee5fbd55d40d1f73a98c5e66083ddfe6d1ed1082a58b4dd7ab483e9be02158625a1f9704683a539d397e5eae6c36966c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ReportsModule-5c59ef759c8942c54c49396e31227505ee5fbd55d40d1f73a98c5e66083ddfe6d1ed1082a58b4dd7ab483e9be02158625a1f9704683a539d397e5eae6c36966c"' :
                                        'id="xs-injectables-links-module-ReportsModule-5c59ef759c8942c54c49396e31227505ee5fbd55d40d1f73a98c5e66083ddfe6d1ed1082a58b4dd7ab483e9be02158625a1f9704683a539d397e5eae6c36966c"' }>
                                        <li class="link">
                                            <a href="injectables/ReportsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReportsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SeedModule.html" data-type="entity-link" >SeedModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-SeedModule-e10332918197645aea0ab35b6b39003c3226c7d2d8bb8680f539afcb4663caf294aa99114fe1c5ec011e10c48f105f22554a26ba920ce5d848e522e727f25ef8"' : 'data-bs-target="#xs-injectables-links-module-SeedModule-e10332918197645aea0ab35b6b39003c3226c7d2d8bb8680f539afcb4663caf294aa99114fe1c5ec011e10c48f105f22554a26ba920ce5d848e522e727f25ef8"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SeedModule-e10332918197645aea0ab35b6b39003c3226c7d2d8bb8680f539afcb4663caf294aa99114fe1c5ec011e10c48f105f22554a26ba920ce5d848e522e727f25ef8"' :
                                        'id="xs-injectables-links-module-SeedModule-e10332918197645aea0ab35b6b39003c3226c7d2d8bb8680f539afcb4663caf294aa99114fe1c5ec011e10c48f105f22554a26ba920ce5d848e522e727f25ef8"' }>
                                        <li class="link">
                                            <a href="injectables/SeedService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SeedService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-SharedModule-cbfbf85995c936058d8db9f34821be0383fa594d66ff9d9c4bd27b8b5aa57c7f886cb00728829e8c254426646e047a6d77e8998c3468f7422b94c2c5d61ac0dc"' : 'data-bs-target="#xs-injectables-links-module-SharedModule-cbfbf85995c936058d8db9f34821be0383fa594d66ff9d9c4bd27b8b5aa57c7f886cb00728829e8c254426646e047a6d77e8998c3468f7422b94c2c5d61ac0dc"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SharedModule-cbfbf85995c936058d8db9f34821be0383fa594d66ff9d9c4bd27b8b5aa57c7f886cb00728829e8c254426646e047a6d77e8998c3468f7422b94c2c5d61ac0dc"' :
                                        'id="xs-injectables-links-module-SharedModule-cbfbf85995c936058d8db9f34821be0383fa594d66ff9d9c4bd27b8b5aa57c7f886cb00728829e8c254426646e047a6d77e8998c3468f7422b94c2c5d61ac0dc"' }>
                                        <li class="link">
                                            <a href="injectables/EventEmitter2Adapter.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EventEmitter2Adapter</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SocialMediaModule.html" data-type="entity-link" >SocialMediaModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-SocialMediaModule-3ad01061593ddc157a7ddb3a33b1e2f28a37fd9bbba5badaaa0a8bfd7ff1137bb7fa1a013adb66dcd16a204b1109e2b0aa925495a9d7b4853a5244e0c200ac8b"' : 'data-bs-target="#xs-controllers-links-module-SocialMediaModule-3ad01061593ddc157a7ddb3a33b1e2f28a37fd9bbba5badaaa0a8bfd7ff1137bb7fa1a013adb66dcd16a204b1109e2b0aa925495a9d7b4853a5244e0c200ac8b"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-SocialMediaModule-3ad01061593ddc157a7ddb3a33b1e2f28a37fd9bbba5badaaa0a8bfd7ff1137bb7fa1a013adb66dcd16a204b1109e2b0aa925495a9d7b4853a5244e0c200ac8b"' :
                                            'id="xs-controllers-links-module-SocialMediaModule-3ad01061593ddc157a7ddb3a33b1e2f28a37fd9bbba5badaaa0a8bfd7ff1137bb7fa1a013adb66dcd16a204b1109e2b0aa925495a9d7b4853a5244e0c200ac8b"' }>
                                            <li class="link">
                                                <a href="controllers/SocialMediaController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SocialMediaController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-SocialMediaModule-3ad01061593ddc157a7ddb3a33b1e2f28a37fd9bbba5badaaa0a8bfd7ff1137bb7fa1a013adb66dcd16a204b1109e2b0aa925495a9d7b4853a5244e0c200ac8b"' : 'data-bs-target="#xs-injectables-links-module-SocialMediaModule-3ad01061593ddc157a7ddb3a33b1e2f28a37fd9bbba5badaaa0a8bfd7ff1137bb7fa1a013adb66dcd16a204b1109e2b0aa925495a9d7b4853a5244e0c200ac8b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SocialMediaModule-3ad01061593ddc157a7ddb3a33b1e2f28a37fd9bbba5badaaa0a8bfd7ff1137bb7fa1a013adb66dcd16a204b1109e2b0aa925495a9d7b4853a5244e0c200ac8b"' :
                                        'id="xs-injectables-links-module-SocialMediaModule-3ad01061593ddc157a7ddb3a33b1e2f28a37fd9bbba5badaaa0a8bfd7ff1137bb7fa1a013adb66dcd16a204b1109e2b0aa925495a9d7b4853a5244e0c200ac8b"' }>
                                        <li class="link">
                                            <a href="injectables/SocialMediaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SocialMediaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SubordinationModule.html" data-type="entity-link" >SubordinationModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-SubordinationModule-1712a7ee23e333a6c10cbb094b6290eb954d8a1f7ad5aed57edf8098ad23867efa7e3193f6d0ef644b0a4007d52790c4cc2af6ed3f1be3d29571025f2fc44bc4"' : 'data-bs-target="#xs-controllers-links-module-SubordinationModule-1712a7ee23e333a6c10cbb094b6290eb954d8a1f7ad5aed57edf8098ad23867efa7e3193f6d0ef644b0a4007d52790c4cc2af6ed3f1be3d29571025f2fc44bc4"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-SubordinationModule-1712a7ee23e333a6c10cbb094b6290eb954d8a1f7ad5aed57edf8098ad23867efa7e3193f6d0ef644b0a4007d52790c4cc2af6ed3f1be3d29571025f2fc44bc4"' :
                                            'id="xs-controllers-links-module-SubordinationModule-1712a7ee23e333a6c10cbb094b6290eb954d8a1f7ad5aed57edf8098ad23867efa7e3193f6d0ef644b0a4007d52790c4cc2af6ed3f1be3d29571025f2fc44bc4"' }>
                                            <li class="link">
                                                <a href="controllers/SubordinationController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SubordinationController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-SubordinationModule-1712a7ee23e333a6c10cbb094b6290eb954d8a1f7ad5aed57edf8098ad23867efa7e3193f6d0ef644b0a4007d52790c4cc2af6ed3f1be3d29571025f2fc44bc4"' : 'data-bs-target="#xs-injectables-links-module-SubordinationModule-1712a7ee23e333a6c10cbb094b6290eb954d8a1f7ad5aed57edf8098ad23867efa7e3193f6d0ef644b0a4007d52790c4cc2af6ed3f1be3d29571025f2fc44bc4"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SubordinationModule-1712a7ee23e333a6c10cbb094b6290eb954d8a1f7ad5aed57edf8098ad23867efa7e3193f6d0ef644b0a4007d52790c4cc2af6ed3f1be3d29571025f2fc44bc4"' :
                                        'id="xs-injectables-links-module-SubordinationModule-1712a7ee23e333a6c10cbb094b6290eb954d8a1f7ad5aed57edf8098ad23867efa7e3193f6d0ef644b0a4007d52790c4cc2af6ed3f1be3d29571025f2fc44bc4"' }>
                                        <li class="link">
                                            <a href="injectables/SubordinationService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SubordinationService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TaxIdentificationNumberModule.html" data-type="entity-link" >TaxIdentificationNumberModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-TaxIdentificationNumberModule-5e2f02a65d4c2c7565c309b3d98085a752d19c0b4e5c4a2fd0154e868ba5b4c0aa3f7ec8dc594df6bbea861de64c4999d5a5d938ddf86758424cfb7f07f178b4"' : 'data-bs-target="#xs-controllers-links-module-TaxIdentificationNumberModule-5e2f02a65d4c2c7565c309b3d98085a752d19c0b4e5c4a2fd0154e868ba5b4c0aa3f7ec8dc594df6bbea861de64c4999d5a5d938ddf86758424cfb7f07f178b4"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-TaxIdentificationNumberModule-5e2f02a65d4c2c7565c309b3d98085a752d19c0b4e5c4a2fd0154e868ba5b4c0aa3f7ec8dc594df6bbea861de64c4999d5a5d938ddf86758424cfb7f07f178b4"' :
                                            'id="xs-controllers-links-module-TaxIdentificationNumberModule-5e2f02a65d4c2c7565c309b3d98085a752d19c0b4e5c4a2fd0154e868ba5b4c0aa3f7ec8dc594df6bbea861de64c4999d5a5d938ddf86758424cfb7f07f178b4"' }>
                                            <li class="link">
                                                <a href="controllers/TaxIdentificationNumberController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TaxIdentificationNumberController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-TaxIdentificationNumberModule-5e2f02a65d4c2c7565c309b3d98085a752d19c0b4e5c4a2fd0154e868ba5b4c0aa3f7ec8dc594df6bbea861de64c4999d5a5d938ddf86758424cfb7f07f178b4"' : 'data-bs-target="#xs-injectables-links-module-TaxIdentificationNumberModule-5e2f02a65d4c2c7565c309b3d98085a752d19c0b4e5c4a2fd0154e868ba5b4c0aa3f7ec8dc594df6bbea861de64c4999d5a5d938ddf86758424cfb7f07f178b4"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TaxIdentificationNumberModule-5e2f02a65d4c2c7565c309b3d98085a752d19c0b4e5c4a2fd0154e868ba5b4c0aa3f7ec8dc594df6bbea861de64c4999d5a5d938ddf86758424cfb7f07f178b4"' :
                                        'id="xs-injectables-links-module-TaxIdentificationNumberModule-5e2f02a65d4c2c7565c309b3d98085a752d19c0b4e5c4a2fd0154e868ba5b4c0aa3f7ec8dc594df6bbea861de64c4999d5a5d938ddf86758424cfb7f07f178b4"' }>
                                        <li class="link">
                                            <a href="injectables/TaxIdentificationNumberService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TaxIdentificationNumberService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UsersModule-878ee7ddd0e7b1d8141acd714aa3b1afc97ddea13fe4b74a4e37636d49cb79532d86968f8735600d03d4528e8165fb29adcc85bcb600a977f267f6a97a190a25"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-878ee7ddd0e7b1d8141acd714aa3b1afc97ddea13fe4b74a4e37636d49cb79532d86968f8735600d03d4528e8165fb29adcc85bcb600a977f267f6a97a190a25"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-878ee7ddd0e7b1d8141acd714aa3b1afc97ddea13fe4b74a4e37636d49cb79532d86968f8735600d03d4528e8165fb29adcc85bcb600a977f267f6a97a190a25"' :
                                            'id="xs-controllers-links-module-UsersModule-878ee7ddd0e7b1d8141acd714aa3b1afc97ddea13fe4b74a4e37636d49cb79532d86968f8735600d03d4528e8165fb29adcc85bcb600a977f267f6a97a190a25"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-878ee7ddd0e7b1d8141acd714aa3b1afc97ddea13fe4b74a4e37636d49cb79532d86968f8735600d03d4528e8165fb29adcc85bcb600a977f267f6a97a190a25"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-878ee7ddd0e7b1d8141acd714aa3b1afc97ddea13fe4b74a4e37636d49cb79532d86968f8735600d03d4528e8165fb29adcc85bcb600a977f267f6a97a190a25"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-878ee7ddd0e7b1d8141acd714aa3b1afc97ddea13fe4b74a4e37636d49cb79532d86968f8735600d03d4528e8165fb29adcc85bcb600a977f267f6a97a190a25"' :
                                        'id="xs-injectables-links-module-UsersModule-878ee7ddd0e7b1d8141acd714aa3b1afc97ddea13fe4b74a4e37636d49cb79532d86968f8735600d03d4528e8165fb29adcc85bcb600a977f267f6a97a190a25"' }>
                                        <li class="link">
                                            <a href="injectables/UserMongoRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserMongoRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AccessAndUseConditionsController.html" data-type="entity-link" >AccessAndUseConditionsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AssociatedDocumentationController.html" data-type="entity-link" >AssociatedDocumentationController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/CategoryMuseumController.html" data-type="entity-link" >CategoryMuseumController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/CommercialRegistrationController.html" data-type="entity-link" >CommercialRegistrationController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/CountryController.html" data-type="entity-link" >CountryController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/CreationDetailsController.html" data-type="entity-link" >CreationDetailsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/CulturalHeritagePropertyController.html" data-type="entity-link" >CulturalHeritagePropertyController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/CulturalNotesController.html" data-type="entity-link" >CulturalNotesController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/CulturalRecordController.html" data-type="entity-link" >CulturalRecordController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/DescriptionControlController.html" data-type="entity-link" >DescriptionControlController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/DescriptionUnitsController.html" data-type="entity-link" >DescriptionUnitsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/EmailsController.html" data-type="entity-link" >EmailsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/EntryAndLocationRecordController.html" data-type="entity-link" >EntryAndLocationRecordController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ExtraInformationController.html" data-type="entity-link" >ExtraInformationController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/FieldReviewStatusController.html" data-type="entity-link" >FieldReviewStatusController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/FileStorageController.html" data-type="entity-link" >FileStorageController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/HeritageOfficesController.html" data-type="entity-link" >HeritageOfficesController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/InstitutionCategoriesController.html" data-type="entity-link" >InstitutionCategoriesController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/InstitutionsController.html" data-type="entity-link" >InstitutionsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/InstitutionTypesController.html" data-type="entity-link" >InstitutionTypesController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/MunicipalityController.html" data-type="entity-link" >MunicipalityController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/MuseumTypesController.html" data-type="entity-link" >MuseumTypesController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/NotesController.html" data-type="entity-link" >NotesController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/PhoneNumbersController.html" data-type="entity-link" >PhoneNumbersController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ProducerAuthorRecordController.html" data-type="entity-link" >ProducerAuthorRecordController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ProvinceController.html" data-type="entity-link" >ProvinceController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ReeupCodeController.html" data-type="entity-link" >ReeupCodeController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ReportsController.html" data-type="entity-link" >ReportsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/SocialMediaController.html" data-type="entity-link" >SocialMediaController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/SubordinationController.html" data-type="entity-link" >SubordinationController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/TaxIdentificationNumberController.html" data-type="entity-link" >TaxIdentificationNumberController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UsersController.html" data-type="entity-link" >UsersController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AccessAndUseCondition.html" data-type="entity-link" >AccessAndUseCondition</a>
                            </li>
                            <li class="link">
                                <a href="classes/AccessAndUseConditions.html" data-type="entity-link" >AccessAndUseConditions</a>
                            </li>
                            <li class="link">
                                <a href="classes/AccessAndUseConditionsEntity.html" data-type="entity-link" >AccessAndUseConditionsEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/ActivatedUserDto.html" data-type="entity-link" >ActivatedUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/AllExceptionsFilter.html" data-type="entity-link" >AllExceptionsFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/AssociatedDocumentation.html" data-type="entity-link" >AssociatedDocumentation</a>
                            </li>
                            <li class="link">
                                <a href="classes/AssociatedDocumentationEntity.html" data-type="entity-link" >AssociatedDocumentationEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/AssociatedDocumentationsEntity.html" data-type="entity-link" >AssociatedDocumentationsEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/Auth.html" data-type="entity-link" >Auth</a>
                            </li>
                            <li class="link">
                                <a href="classes/Auth-1.html" data-type="entity-link" >Auth</a>
                            </li>
                            <li class="link">
                                <a href="classes/AuthChangePasswordDto.html" data-type="entity-link" >AuthChangePasswordDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/AuthResponseDto.html" data-type="entity-link" >AuthResponseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/AuthVerifyCodeDto.html" data-type="entity-link" >AuthVerifyCodeDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/BaseEntity.html" data-type="entity-link" >BaseEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/BaseSchema.html" data-type="entity-link" >BaseSchema</a>
                            </li>
                            <li class="link">
                                <a href="classes/CategoryMuseum.html" data-type="entity-link" >CategoryMuseum</a>
                            </li>
                            <li class="link">
                                <a href="classes/CategoryMuseum-1.html" data-type="entity-link" >CategoryMuseum</a>
                            </li>
                            <li class="link">
                                <a href="classes/CategoryMuseums.html" data-type="entity-link" >CategoryMuseums</a>
                            </li>
                            <li class="link">
                                <a href="classes/ChangeEmailDto.html" data-type="entity-link" >ChangeEmailDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CommercialRegistration.html" data-type="entity-link" >CommercialRegistration</a>
                            </li>
                            <li class="link">
                                <a href="classes/CommercialRegistration-1.html" data-type="entity-link" >CommercialRegistration</a>
                            </li>
                            <li class="link">
                                <a href="classes/Countries.html" data-type="entity-link" >Countries</a>
                            </li>
                            <li class="link">
                                <a href="classes/Country.html" data-type="entity-link" >Country</a>
                            </li>
                            <li class="link">
                                <a href="classes/Country-1.html" data-type="entity-link" >Country</a>
                            </li>
                            <li class="link">
                                <a href="classes/CountryNotFoundException.html" data-type="entity-link" >CountryNotFoundException</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateAccessAndUseConditionDto.html" data-type="entity-link" >CreateAccessAndUseConditionDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateAssociatedDocumentationDto.html" data-type="entity-link" >CreateAssociatedDocumentationDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateCategoryMuseumDto.html" data-type="entity-link" >CreateCategoryMuseumDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateCommercialRegistrationDto.html" data-type="entity-link" >CreateCommercialRegistrationDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateCountryDto.html" data-type="entity-link" >CreateCountryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateCreationDetailDto.html" data-type="entity-link" >CreateCreationDetailDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateCulturalNoteDto.html" data-type="entity-link" >CreateCulturalNoteDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateCulturalPropertyDto.html" data-type="entity-link" >CreateCulturalPropertyDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateCulturalRecordDto.html" data-type="entity-link" >CreateCulturalRecordDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateDefaultCategories.html" data-type="entity-link" >CreateDefaultCategories</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateDescriptionControlDto.html" data-type="entity-link" >CreateDescriptionControlDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateDescriptionUnitDto.html" data-type="entity-link" >CreateDescriptionUnitDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateEmailDto.html" data-type="entity-link" >CreateEmailDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateEntryAndLocationRecordDto.html" data-type="entity-link" >CreateEntryAndLocationRecordDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateExtraInformationDto.html" data-type="entity-link" >CreateExtraInformationDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateFieldReviewStatusDto.html" data-type="entity-link" >CreateFieldReviewStatusDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateHeritageOfficeDto.html" data-type="entity-link" >CreateHeritageOfficeDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateInstitutionCategoryDto.html" data-type="entity-link" >CreateInstitutionCategoryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateInstitutionDto.html" data-type="entity-link" >CreateInstitutionDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateInstitutionTypeDto.html" data-type="entity-link" >CreateInstitutionTypeDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateLocationDto.html" data-type="entity-link" >CreateLocationDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateMunicipalityDto.html" data-type="entity-link" >CreateMunicipalityDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateMuseumTypeDto.html" data-type="entity-link" >CreateMuseumTypeDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateNoteDto.html" data-type="entity-link" >CreateNoteDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePhoneNumberDto.html" data-type="entity-link" >CreatePhoneNumberDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateProducerAuthorRecordDto.html" data-type="entity-link" >CreateProducerAuthorRecordDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateProvinceDto.html" data-type="entity-link" >CreateProvinceDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateReeupCodeDto.html" data-type="entity-link" >CreateReeupCodeDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateReportDto.html" data-type="entity-link" >CreateReportDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateSocialMediaDto.html" data-type="entity-link" >CreateSocialMediaDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateSubordinationDto.html" data-type="entity-link" >CreateSubordinationDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateSuperAdmin.html" data-type="entity-link" >CreateSuperAdmin</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateTaxIdentificationNumberDto.html" data-type="entity-link" >CreateTaxIdentificationNumberDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreationDetail.html" data-type="entity-link" >CreationDetail</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreationDetails.html" data-type="entity-link" >CreationDetails</a>
                            </li>
                            <li class="link">
                                <a href="classes/CulturalHeritagePropertiesEntity.html" data-type="entity-link" >CulturalHeritagePropertiesEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/CulturalHeritageProperty.html" data-type="entity-link" >CulturalHeritageProperty</a>
                            </li>
                            <li class="link">
                                <a href="classes/CulturalHeritageProperty-1.html" data-type="entity-link" >CulturalHeritageProperty</a>
                            </li>
                            <li class="link">
                                <a href="classes/CulturalNoteEntity.html" data-type="entity-link" >CulturalNoteEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/CulturalNotesEntity.html" data-type="entity-link" >CulturalNotesEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/CulturalRecord.html" data-type="entity-link" >CulturalRecord</a>
                            </li>
                            <li class="link">
                                <a href="classes/CulturalRecordEntity.html" data-type="entity-link" >CulturalRecordEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/CulturalRecordsEntity.html" data-type="entity-link" >CulturalRecordsEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/DataConflictFoundException.html" data-type="entity-link" >DataConflictFoundException</a>
                            </li>
                            <li class="link">
                                <a href="classes/DescriptionControl.html" data-type="entity-link" >DescriptionControl</a>
                            </li>
                            <li class="link">
                                <a href="classes/DescriptionControl-1.html" data-type="entity-link" >DescriptionControl</a>
                            </li>
                            <li class="link">
                                <a href="classes/DescriptionControlsEntity.html" data-type="entity-link" >DescriptionControlsEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/DescriptionUnit.html" data-type="entity-link" >DescriptionUnit</a>
                            </li>
                            <li class="link">
                                <a href="classes/DescriptionUnits.html" data-type="entity-link" >DescriptionUnits</a>
                            </li>
                            <li class="link">
                                <a href="classes/Dimensions.html" data-type="entity-link" >Dimensions</a>
                            </li>
                            <li class="link">
                                <a href="classes/DimensionsDto.html" data-type="entity-link" >DimensionsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/DimensionsEntity.html" data-type="entity-link" >DimensionsEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/EditProfileDto.html" data-type="entity-link" >EditProfileDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Either.html" data-type="entity-link" >Either</a>
                            </li>
                            <li class="link">
                                <a href="classes/Email.html" data-type="entity-link" >Email</a>
                            </li>
                            <li class="link">
                                <a href="classes/Emails.html" data-type="entity-link" >Emails</a>
                            </li>
                            <li class="link">
                                <a href="classes/EntryAndLocationRecord.html" data-type="entity-link" >EntryAndLocationRecord</a>
                            </li>
                            <li class="link">
                                <a href="classes/EntryAndLocationRecord-1.html" data-type="entity-link" >EntryAndLocationRecord</a>
                            </li>
                            <li class="link">
                                <a href="classes/EntryAndLocationRecordsEntity.html" data-type="entity-link" >EntryAndLocationRecordsEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/ExtendedAccessAndUseConditionEntity.html" data-type="entity-link" >ExtendedAccessAndUseConditionEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/ExtendedAssociatedDocumentationEntity.html" data-type="entity-link" >ExtendedAssociatedDocumentationEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/ExtendedCulturalNoteEntity.html" data-type="entity-link" >ExtendedCulturalNoteEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/ExtendedCulturalRecordEntity.html" data-type="entity-link" >ExtendedCulturalRecordEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/ExtendedDescriptionControlEntity.html" data-type="entity-link" >ExtendedDescriptionControlEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/ExtendedEntryAndLocationRecordsEntity.html" data-type="entity-link" >ExtendedEntryAndLocationRecordsEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/ExtendedProducerAuthorRecord.html" data-type="entity-link" >ExtendedProducerAuthorRecord</a>
                            </li>
                            <li class="link">
                                <a href="classes/ExtraInformation.html" data-type="entity-link" >ExtraInformation</a>
                            </li>
                            <li class="link">
                                <a href="classes/ExtraInformation-1.html" data-type="entity-link" >ExtraInformation</a>
                            </li>
                            <li class="link">
                                <a href="classes/ExtremeDatesDto.html" data-type="entity-link" >ExtremeDatesDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ExtremeDatesEntity.html" data-type="entity-link" >ExtremeDatesEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/FieldReviewStatus.html" data-type="entity-link" >FieldReviewStatus</a>
                            </li>
                            <li class="link">
                                <a href="classes/FieldReviewStatus-1.html" data-type="entity-link" >FieldReviewStatus</a>
                            </li>
                            <li class="link">
                                <a href="classes/FileControl.html" data-type="entity-link" >FileControl</a>
                            </li>
                            <li class="link">
                                <a href="classes/FilesDto.html" data-type="entity-link" >FilesDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/FileStorage.html" data-type="entity-link" >FileStorage</a>
                            </li>
                            <li class="link">
                                <a href="classes/FileUploadDto.html" data-type="entity-link" >FileUploadDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/FilterCountryByNameDto.html" data-type="entity-link" >FilterCountryByNameDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/FilterUserDto.html" data-type="entity-link" >FilterUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/FindAllDto.html" data-type="entity-link" >FindAllDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Forbidden.html" data-type="entity-link" >Forbidden</a>
                            </li>
                            <li class="link">
                                <a href="classes/ForgotPasswordDto.html" data-type="entity-link" >ForgotPasswordDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/HeritageOffice.html" data-type="entity-link" >HeritageOffice</a>
                            </li>
                            <li class="link">
                                <a href="classes/HeritageOffices.html" data-type="entity-link" >HeritageOffices</a>
                            </li>
                            <li class="link">
                                <a href="classes/HttpExceptionFilter.html" data-type="entity-link" >HttpExceptionFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/Institution.html" data-type="entity-link" >Institution</a>
                            </li>
                            <li class="link">
                                <a href="classes/Institution-1.html" data-type="entity-link" >Institution</a>
                            </li>
                            <li class="link">
                                <a href="classes/InstitutionCategories.html" data-type="entity-link" >InstitutionCategories</a>
                            </li>
                            <li class="link">
                                <a href="classes/InstitutionCategory.html" data-type="entity-link" >InstitutionCategory</a>
                            </li>
                            <li class="link">
                                <a href="classes/Institutions.html" data-type="entity-link" >Institutions</a>
                            </li>
                            <li class="link">
                                <a href="classes/InstitutionType.html" data-type="entity-link" >InstitutionType</a>
                            </li>
                            <li class="link">
                                <a href="classes/InstitutionTypes.html" data-type="entity-link" >InstitutionTypes</a>
                            </li>
                            <li class="link">
                                <a href="classes/IsForbiddenForRolesConstraint.html" data-type="entity-link" >IsForbiddenForRolesConstraint</a>
                            </li>
                            <li class="link">
                                <a href="classes/JwtPayload.html" data-type="entity-link" >JwtPayload</a>
                            </li>
                            <li class="link">
                                <a href="classes/Location.html" data-type="entity-link" >Location</a>
                            </li>
                            <li class="link">
                                <a href="classes/LocationEntity.html" data-type="entity-link" >LocationEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginDto.html" data-type="entity-link" >LoginDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginResponseDto.html" data-type="entity-link" >LoginResponseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Maybe.html" data-type="entity-link" >Maybe</a>
                            </li>
                            <li class="link">
                                <a href="classes/MediaFileMetadata.html" data-type="entity-link" >MediaFileMetadata</a>
                            </li>
                            <li class="link">
                                <a href="classes/Municipalities.html" data-type="entity-link" >Municipalities</a>
                            </li>
                            <li class="link">
                                <a href="classes/Municipalities-1.html" data-type="entity-link" >Municipalities</a>
                            </li>
                            <li class="link">
                                <a href="classes/Municipalities-2.html" data-type="entity-link" >Municipalities</a>
                            </li>
                            <li class="link">
                                <a href="classes/Municipality.html" data-type="entity-link" >Municipality</a>
                            </li>
                            <li class="link">
                                <a href="classes/Municipality-1.html" data-type="entity-link" >Municipality</a>
                            </li>
                            <li class="link">
                                <a href="classes/MunicipalityNotFoundException.html" data-type="entity-link" >MunicipalityNotFoundException</a>
                            </li>
                            <li class="link">
                                <a href="classes/MuseumType.html" data-type="entity-link" >MuseumType</a>
                            </li>
                            <li class="link">
                                <a href="classes/MuseumTypes.html" data-type="entity-link" >MuseumTypes</a>
                            </li>
                            <li class="link">
                                <a href="classes/Note.html" data-type="entity-link" >Note</a>
                            </li>
                            <li class="link">
                                <a href="classes/Notes.html" data-type="entity-link" >Notes</a>
                            </li>
                            <li class="link">
                                <a href="classes/Notes-1.html" data-type="entity-link" >Notes</a>
                            </li>
                            <li class="link">
                                <a href="classes/NotFound.html" data-type="entity-link" >NotFound</a>
                            </li>
                            <li class="link">
                                <a href="classes/Paginator.html" data-type="entity-link" >Paginator</a>
                            </li>
                            <li class="link">
                                <a href="classes/PhoneNumber.html" data-type="entity-link" >PhoneNumber</a>
                            </li>
                            <li class="link">
                                <a href="classes/PhoneNumbers.html" data-type="entity-link" >PhoneNumbers</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProducerAuthorRecord.html" data-type="entity-link" >ProducerAuthorRecord</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProducerAuthorRecord-1.html" data-type="entity-link" >ProducerAuthorRecord</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProducerAuthorRecords.html" data-type="entity-link" >ProducerAuthorRecords</a>
                            </li>
                            <li class="link">
                                <a href="classes/Province.html" data-type="entity-link" >Province</a>
                            </li>
                            <li class="link">
                                <a href="classes/Province-1.html" data-type="entity-link" >Province</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProvinceNotFoundException.html" data-type="entity-link" >ProvinceNotFoundException</a>
                            </li>
                            <li class="link">
                                <a href="classes/Provinces.html" data-type="entity-link" >Provinces</a>
                            </li>
                            <li class="link">
                                <a href="classes/ReeupCode.html" data-type="entity-link" >ReeupCode</a>
                            </li>
                            <li class="link">
                                <a href="classes/ReeupCode-1.html" data-type="entity-link" >ReeupCode</a>
                            </li>
                            <li class="link">
                                <a href="classes/RefreshAuthTokenDto.html" data-type="entity-link" >RefreshAuthTokenDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/RegisterDto.html" data-type="entity-link" >RegisterDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Report.html" data-type="entity-link" >Report</a>
                            </li>
                            <li class="link">
                                <a href="classes/Reports.html" data-type="entity-link" >Reports</a>
                            </li>
                            <li class="link">
                                <a href="classes/SendEmailAuthException.html" data-type="entity-link" >SendEmailAuthException</a>
                            </li>
                            <li class="link">
                                <a href="classes/SerializeDto.html" data-type="entity-link" >SerializeDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/SerializerResponse.html" data-type="entity-link" >SerializerResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/SetOperation.html" data-type="entity-link" >SetOperation</a>
                            </li>
                            <li class="link">
                                <a href="classes/SocialMedia.html" data-type="entity-link" >SocialMedia</a>
                            </li>
                            <li class="link">
                                <a href="classes/SocialMedia-1.html" data-type="entity-link" >SocialMedia</a>
                            </li>
                            <li class="link">
                                <a href="classes/Subordination.html" data-type="entity-link" >Subordination</a>
                            </li>
                            <li class="link">
                                <a href="classes/Subordination-1.html" data-type="entity-link" >Subordination</a>
                            </li>
                            <li class="link">
                                <a href="classes/TaxIdentificationNumber.html" data-type="entity-link" >TaxIdentificationNumber</a>
                            </li>
                            <li class="link">
                                <a href="classes/TaxIdentificationNumber-1.html" data-type="entity-link" >TaxIdentificationNumber</a>
                            </li>
                            <li class="link">
                                <a href="classes/Unauthorized.html" data-type="entity-link" >Unauthorized</a>
                            </li>
                            <li class="link">
                                <a href="classes/UnauthorizedAuthException.html" data-type="entity-link" >UnauthorizedAuthException</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateAccessAndUseConditionDto.html" data-type="entity-link" >UpdateAccessAndUseConditionDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateAssociatedDocumentationDto.html" data-type="entity-link" >UpdateAssociatedDocumentationDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateCategoryMuseumDto.html" data-type="entity-link" >UpdateCategoryMuseumDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateCommercialRegistrationDto.html" data-type="entity-link" >UpdateCommercialRegistrationDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateCountryDto.html" data-type="entity-link" >UpdateCountryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateCreationDetailDto.html" data-type="entity-link" >UpdateCreationDetailDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateCulturalNoteDto.html" data-type="entity-link" >UpdateCulturalNoteDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateCulturalRecordDto.html" data-type="entity-link" >UpdateCulturalRecordDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateDescriptionControlDto.html" data-type="entity-link" >UpdateDescriptionControlDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateDescriptionUnitDto.html" data-type="entity-link" >UpdateDescriptionUnitDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateEmailDto.html" data-type="entity-link" >UpdateEmailDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateEntryAndLocationRecordDto.html" data-type="entity-link" >UpdateEntryAndLocationRecordDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateExtraInformationDto.html" data-type="entity-link" >UpdateExtraInformationDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateFieldReviewStatusDto.html" data-type="entity-link" >UpdateFieldReviewStatusDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateHeritageOfficeDto.html" data-type="entity-link" >UpdateHeritageOfficeDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateInstitutionCategoryDto.html" data-type="entity-link" >UpdateInstitutionCategoryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateInstitutionDto.html" data-type="entity-link" >UpdateInstitutionDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateInstitutionTypeDto.html" data-type="entity-link" >UpdateInstitutionTypeDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateMunicipalityDto.html" data-type="entity-link" >UpdateMunicipalityDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateMuseumTypeDto.html" data-type="entity-link" >UpdateMuseumTypeDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateNoteDto.html" data-type="entity-link" >UpdateNoteDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdatePhoneNumberDto.html" data-type="entity-link" >UpdatePhoneNumberDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateProducerAuthorRecordDto.html" data-type="entity-link" >UpdateProducerAuthorRecordDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateProvinceDto.html" data-type="entity-link" >UpdateProvinceDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateReeupCodeDto.html" data-type="entity-link" >UpdateReeupCodeDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateReportDto.html" data-type="entity-link" >UpdateReportDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateSocialMediaDto.html" data-type="entity-link" >UpdateSocialMediaDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateSubordinationDto.html" data-type="entity-link" >UpdateSubordinationDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateTaxIdentificationNumberDto.html" data-type="entity-link" >UpdateTaxIdentificationNumberDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserDto.html" data-type="entity-link" >UpdateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UploadAvatarUserDto.html" data-type="entity-link" >UploadAvatarUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UploadedFileEmbed.html" data-type="entity-link" >UploadedFileEmbed</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                            <li class="link">
                                <a href="classes/User-1.html" data-type="entity-link" >User</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserEventBadRequest.html" data-type="entity-link" >UserEventBadRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/Users.html" data-type="entity-link" >Users</a>
                            </li>
                            <li class="link">
                                <a href="classes/VolumeQuantities.html" data-type="entity-link" >VolumeQuantities</a>
                            </li>
                            <li class="link">
                                <a href="classes/VolumeQuantitiesEntity.html" data-type="entity-link" >VolumeQuantitiesEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/VolumesQuantitiesDto.html" data-type="entity-link" >VolumesQuantitiesDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AssociatedDocumentationService.html" data-type="entity-link" >AssociatedDocumentationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthJwtModuleConfig.html" data-type="entity-link" >AuthJwtModuleConfig</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthMongoRepository.html" data-type="entity-link" >AuthMongoRepository</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CapitalizePipe.html" data-type="entity-link" >CapitalizePipe</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CategoryMuseumService.html" data-type="entity-link" >CategoryMuseumService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CommercialRegistrationService.html" data-type="entity-link" >CommercialRegistrationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CommonRecordService.html" data-type="entity-link" >CommonRecordService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CountryService.html" data-type="entity-link" >CountryService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CreationDetailsService.html" data-type="entity-link" >CreationDetailsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CulturalHeritagePropertyService.html" data-type="entity-link" >CulturalHeritagePropertyService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CulturalNotesService.html" data-type="entity-link" >CulturalNotesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CulturalRecordService.html" data-type="entity-link" >CulturalRecordService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DescriptionControlService.html" data-type="entity-link" >DescriptionControlService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DescriptionUnitsService.html" data-type="entity-link" >DescriptionUnitsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/EmailNodemailerService.html" data-type="entity-link" >EmailNodemailerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/EmailsService.html" data-type="entity-link" >EmailsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/EntryAndLocationRecordService.html" data-type="entity-link" >EntryAndLocationRecordService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ErrorInterceptor.html" data-type="entity-link" >ErrorInterceptor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/EventEmitter2Adapter.html" data-type="entity-link" >EventEmitter2Adapter</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ExtraInformationService.html" data-type="entity-link" >ExtraInformationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FieldReviewStatusService.html" data-type="entity-link" >FieldReviewStatusService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FileStorageMongoRepository.html" data-type="entity-link" >FileStorageMongoRepository</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FileStorageService.html" data-type="entity-link" >FileStorageService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HandledErrorService.html" data-type="entity-link" >HandledErrorService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HeritageOfficesService.html" data-type="entity-link" >HeritageOfficesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ImageProcessingPipe.html" data-type="entity-link" >ImageProcessingPipe</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/InstitutionCategoriesService.html" data-type="entity-link" >InstitutionCategoriesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/InstitutionsService.html" data-type="entity-link" >InstitutionsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/InstitutionTypesService.html" data-type="entity-link" >InstitutionTypesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtActivationGuard.html" data-type="entity-link" >JwtActivationGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtAuthGuard.html" data-type="entity-link" >JwtAuthGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtRefreshGuard.html" data-type="entity-link" >JwtRefreshGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtRefreshTokenStrategy.html" data-type="entity-link" >JwtRefreshTokenStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtStrategy.html" data-type="entity-link" >JwtStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LocalAuthGuard.html" data-type="entity-link" >LocalAuthGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LocalStrategy.html" data-type="entity-link" >LocalStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoggerInterceptor.html" data-type="entity-link" >LoggerInterceptor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LowerCasePipe.html" data-type="entity-link" >LowerCasePipe</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MongoGridConnection.html" data-type="entity-link" >MongoGridConnection</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MongooseConfigService.html" data-type="entity-link" >MongooseConfigService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MunicipalityService.html" data-type="entity-link" >MunicipalityService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MuseumTypesService.html" data-type="entity-link" >MuseumTypesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NotesService.html" data-type="entity-link" >NotesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PhoneNumbersService.html" data-type="entity-link" >PhoneNumbersService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PinoConfigService.html" data-type="entity-link" >PinoConfigService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProducerAuthorRecordService.html" data-type="entity-link" >ProducerAuthorRecordService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProvinceService.html" data-type="entity-link" >ProvinceService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ReeupCodeService.html" data-type="entity-link" >ReeupCodeService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ReportsService.html" data-type="entity-link" >ReportsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SeedService.html" data-type="entity-link" >SeedService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SocialMediaService.html" data-type="entity-link" >SocialMediaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SubordinationService.html" data-type="entity-link" >SubordinationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TaxIdentificationNumberService.html" data-type="entity-link" >TaxIdentificationNumberService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserMongoRepository.html" data-type="entity-link" >UserMongoRepository</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsersService.html" data-type="entity-link" >UsersService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#guards-links"' :
                            'data-bs-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/RolesGuard.html" data-type="entity-link" >RolesGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/AccessAndUseConditionsModel.html" data-type="entity-link" >AccessAndUseConditionsModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AssociatedDocumentationModel.html" data-type="entity-link" >AssociatedDocumentationModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AuthError.html" data-type="entity-link" >AuthError</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AuthModel.html" data-type="entity-link" >AuthModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AuthRepositoryModel.html" data-type="entity-link" >AuthRepositoryModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BaseModel.html" data-type="entity-link" >BaseModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CategoryMuseumModel.html" data-type="entity-link" >CategoryMuseumModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CombinedMetadata.html" data-type="entity-link" >CombinedMetadata</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CommercialRegistrationModel.html" data-type="entity-link" >CommercialRegistrationModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CountryModel.html" data-type="entity-link" >CountryModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CreationDetailsModel.html" data-type="entity-link" >CreationDetailsModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CulturalPropertyModel.html" data-type="entity-link" >CulturalPropertyModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CulturalRecordModel.html" data-type="entity-link" >CulturalRecordModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DescriptionControlModel.html" data-type="entity-link" >DescriptionControlModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DescriptionUnitsModel.html" data-type="entity-link" >DescriptionUnitsModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DimensionsModel.html" data-type="entity-link" >DimensionsModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EmailServiceModel.html" data-type="entity-link" >EmailServiceModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EmailsModel.html" data-type="entity-link" >EmailsModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EmitAsyncParams.html" data-type="entity-link" >EmitAsyncParams</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EmitParams.html" data-type="entity-link" >EmitParams</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EntryAndLocationRecordModel.html" data-type="entity-link" >EntryAndLocationRecordModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ExtraInformationModel.html" data-type="entity-link" >ExtraInformationModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FieldReviewStatusModel.html" data-type="entity-link" >FieldReviewStatusModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FileMetadata.html" data-type="entity-link" >FileMetadata</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FileMetadataModel.html" data-type="entity-link" >FileMetadataModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FileStorageModel.html" data-type="entity-link" >FileStorageModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FileStorageRepositoryModel.html" data-type="entity-link" >FileStorageRepositoryModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FileStorageServiceModel.html" data-type="entity-link" >FileStorageServiceModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/HandlerErrorServiceModel.html" data-type="entity-link" >HandlerErrorServiceModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/HelperMockMethods.html" data-type="entity-link" >HelperMockMethods</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/HeritageOfficesModel.html" data-type="entity-link" >HeritageOfficesModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/InstitutionCategoriesModel.html" data-type="entity-link" >InstitutionCategoriesModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/InstitutionModel.html" data-type="entity-link" >InstitutionModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/InstitutionTypesModel.html" data-type="entity-link" >InstitutionTypesModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LocationModel.html" data-type="entity-link" >LocationModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MongooseOptionsFactoryInterface.html" data-type="entity-link" >MongooseOptionsFactoryInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MunicipalityModel.html" data-type="entity-link" >MunicipalityModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MunicipalityModel-1.html" data-type="entity-link" >MunicipalityModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MuseumTypesModel.html" data-type="entity-link" >MuseumTypesModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/NotesModel.html" data-type="entity-link" >NotesModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/NotesModel-1.html" data-type="entity-link" >NotesModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PhoneNumbersModel.html" data-type="entity-link" >PhoneNumbersModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ProducerAuthorRecordModel.html" data-type="entity-link" >ProducerAuthorRecordModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ProvinceModel.html" data-type="entity-link" >ProvinceModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ReeupCodeModel.html" data-type="entity-link" >ReeupCodeModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ReportsModel.html" data-type="entity-link" >ReportsModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SocialMediaModel.html" data-type="entity-link" >SocialMediaModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SubordinationModel.html" data-type="entity-link" >SubordinationModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TaxIdentificationNumberModel.html" data-type="entity-link" >TaxIdentificationNumberModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UploadedFile.html" data-type="entity-link" >UploadedFile</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UseGuardOptions.html" data-type="entity-link" >UseGuardOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserModel.html" data-type="entity-link" >UserModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserParams.html" data-type="entity-link" >UserParams</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UsersModel.html" data-type="entity-link" >UsersModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/VolumeQuantitiesModel.html" data-type="entity-link" >VolumeQuantitiesModel</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});