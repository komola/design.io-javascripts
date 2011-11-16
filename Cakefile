{spawn, exec}   = require 'child_process'
Shift           = require 'shift'
fs              = require 'fs'

task 'coffee', ->
  coffee = spawn './node_modules/coffee-script/bin/coffee', ['-o', 'lib', '-w', 'src']
  coffee.stdout.on 'data', (data) -> console.log data.toString().trim()
  coffee = spawn './node_modules/coffee-script/bin/coffee', ['-o', 'spec', '-w', 'spec']
  coffee.stdout.on 'data', (data) -> console.log data.toString().trim()
