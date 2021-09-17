import { TaroPlatformBase } from '@tarojs/service'
import { RecursiveTemplate, UnRecursiveTemplate } from '@tarojs/shared/dist/template'
import { components } from './component'

class Weapp extends TaroPlatformBase {
  platform: string
  globalObject: string
  runtimePath: string | string[]
  fileType = {
    templ: '.wxml',
    style: '.wxss',
    config: '.json',
    script: '.js',
    xs: '.wxs'
  }
  template: RecursiveTemplate | UnRecursiveTemplate
  constructor (ctx, config) {
    super(ctx, config)

    // 在 setup 阶段结束时，修改模板
    this.setupTransaction.addWrapper({
      close: this.modifyTemplate
    })
  }

  modifyTemplate () {
    this.template.mergeComponents(this.ctx, components)
  }
}

export default Weapp