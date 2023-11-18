import {arch, platform} from "os";

export function getOsArch() {
  return `${platform()}-${arch()}`
}