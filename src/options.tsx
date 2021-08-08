/* eslint @typescript-eslint/no-var-requires: "off" */
/*
 * Copyright (c) 2019-present Sonatype, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import {faArrowLeft, faArrowRight, faLink} from '@fortawesome/free-solid-svg-icons';
import {
  NxGlobalSidebarNavigation,
  NxGlobalSidebarNavigationLink,
  NxPageMain,
  NxStatefulGlobalSidebar
} from '@sonatype/react-shared-components';
import React from 'react';
import ReactDOM from 'react-dom';
import NexusOptionsContainer from './NexusOptionsContainer';

const logoImg = require('../public/images/SON_logo_favicon.png');

const renderOptions = () => {
  const search = window.location.search;
  const params = new URLSearchParams(search);
  const install = params.has('install');
  const help = params.has('help');

  ReactDOM.render(
    <React.StrictMode>
      <NxStatefulGlobalSidebar
        isDefaultOpen={true}
        toggleCloseIcon={faArrowRight}
        toggleOpenIcon={faArrowLeft}
        logoImg={logoImg}
        logoAltText="Nexus Chrome Extension"
        logoLink="#"
      >
        <NxGlobalSidebarNavigation>
          <NxGlobalSidebarNavigationLink icon={faLink} text="Help" href="options.html?help" />
          <NxGlobalSidebarNavigationLink
            icon={faLink}
            text="First Install"
            href="options.html?install"
          />
          <NxGlobalSidebarNavigationLink icon={faLink} text="Options" href="options.html" />
        </NxGlobalSidebarNavigation>
      </NxStatefulGlobalSidebar>
      <NxPageMain>
        <NexusOptionsContainer install={install} help={help} />
      </NxPageMain>
    </React.StrictMode>,
    document.getElementById('ui')
  );
};

renderOptions();
