import { type Commands, Runner } from '@tools/gitversion'
import { getAgent, parseCliArgs } from '@lib'

const { command, agent } = parseCliArgs()
const buildAgent = await getAgent(agent)
const runner = new Runner(buildAgent)
await runner.run(command as Commands)
