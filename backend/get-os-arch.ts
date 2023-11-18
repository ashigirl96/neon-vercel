import {arch, platform} from "os";
// @ts-ignore
import {hello} from "@ashigirl96/neon-build";

export function getOsArch() {
  return `${platform()}-${arch()}-${hello()}`
}