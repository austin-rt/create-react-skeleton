#!/usr/bin/env node

const { execSync } = require('child_process')

const runCommand = (command) => {
  try {
    execSync(`${command}`, { stdio: 'inheret' })
  } catch (e) {
    console.error(`Failed to execute ${command}`, e)
    return false
  }
  return true
}

const repoName = process.argv[2]
const gitCheckoutCommand = `git clone --depth 1 https://github.com/austin-rt/create-react-skeleton.git ${repoName}`
const installDepsCommand = `cd ${repoName} && npm install`

console.log(`Cloning with name ${repoName}`)
const checkedOut = runCommand(gitCheckoutCommand)

if (!checkedOut) process.exit()

console.log(`Installing dependencies for ${repoName}`)
const installedDeps = runCommand(installDepsCommand)

if (!installedDeps) process.exit()

console.log('Congrate! ~happy hacking~')
console.log('Run the following commands to start')
console.log(`cd ${repoName} && npm start`)
