import React from 'react';
export function getPlainNode(nodeList, parentPath = '') {
    const arr = [];
    nodeList.forEach(node => {
        const item = node;
        item.path = `${parentPath}/${item.path || ''}`.replace(/\/+/g, '/');
        item.exact = true;
        if (item.children && !item.component) {
            arr.push(...getPlainNode(item.children, item.path));
        } else {
            if (item.children && item.component) {
                item.exact = false;
            }
            arr.push(item);
        }
    });
    return arr;
}

/*
 *得到访问API的前缀是否加上-dev
 */
export function getEnvSuffix() {
    const host = window.location.host;
    let codeEnv = '-dev';
    // let codeEnv = '-demo';
    try {
        const env = host.match(/rsskff(\S*).cooorp/)[1];
        codeEnv = env;
    } catch (e) {
        throw e;
    } finally {
        return codeEnv;
    }
}





