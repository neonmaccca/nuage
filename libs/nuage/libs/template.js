/*
 *  Nuage - Framework for Nodejs
 *
 *  Copyright (c) 2011 Stephan Bruny
 *
 *  This software is provided 'as-is', without any express or implied warranty.
 *  In no event will the authors be held liable for any damages arising from the use of this software.
 *
 *  Permission is granted to anyone to use this software for any purpose,
 *  including commercial applications, and to alter it and redistribute it freely,
 *  subject to the following restrictions:
 *
 *      The origin of this software must not be misrepresented;
 *      you must not claim that you wrote the original software.
 *      If you use this software in a product,
 *      an acknowledgment in the product documentation would be appreciated but is not required.
 *      Altered source versions must be plainly marked as such,
 *      and must not be misrepresented as being the original software.
 *      This notice may not be removed or altered from any source distribution.
 *
 */

var ejs = require('./ejs/ejs.js');

var fs = require('fs');

exports.render = function(filename, data) {
    var html = '';

    try {
        var templateFile = fs.readFileSync(filename, 'utf8');
        var template = new EJS({text:templateFile});
    } catch (exception) {
        throw exception;
    }

    return template.render(data || {});
};