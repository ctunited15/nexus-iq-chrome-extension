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
//Someone smarter than me can work out all the various test cases for repo1
//https://repo1.maven.org/maven2/org/apache/struts/struts2-core/2.3.30/
//"purl": "pkg:maven/org.apache.struts/struts2-core/2.3.30/jar",
import {PackageURL} from 'packageurl-js';
import {FORMATS} from '../Constants';
import {generatePackageURLComplete} from './PurlUtils';

//pkg:type/namespace/name@version?qualifiers#subpath
const parseRepo1MavenOrg = (url: string): PackageURL | undefined => {
  const elements = url.split('/');
  if (elements.length >= 7) {
    if (elements[elements.length - 1] == '') elements.pop();
    const version = encodeURIComponent(elements.pop());
    const artifact = encodeURIComponent(elements.pop());
    //group is multiple components separated by slashes, so need to pop them off
    let group = '';
    let element = '';
    element = elements.pop();
    do {
      group = element + '.' + group;
      element = elements.pop();
    } while (element !== 'maven2');
    //last char is a dot so remove it
    group = group.substring(0, group.length - 1);
    // console.trace("group", group);
    const qualifiers = {type: 'jar'};
    const subpath = undefined;
    const format: string = FORMATS.maven;
    return generatePackageURLComplete(format, artifact, version, group, qualifiers, subpath);
  }

  return undefined;
};

export {parseRepo1MavenOrg};
