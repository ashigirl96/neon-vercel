import {arch, platform} from "os";
import { hello } from '@ashigirl96/neon-build'

export function getOsArch() {
  return `${platform()}-${arch()}-${JSON.stringify(hello())}-3`
}