import { TaroPlatformBase } from '@tarojs/service'

const PACKAGE_NAME = '@tarojs/plugin-platform-weapp'

class Weapp extends TaroPlatformBase {
  // 平台名称
  platform = 'weapp'
  // 小程序全局对象
  globalObject = 'wx'
  // 小程序编译的运行时文件的解析路径
  runtimePath = `${PACKAGE_NAME}/dist/runtime`
  // 文件后缀
  fileType = {
    templ: '.wxml',
    style: '.wxss',
    config: '.json',
    script: '.js',
    xs: '.wxs'
  }
  template = new Template()
  // 小程序配置文件名称
  projectConfigJson = 'project.config.json'
  // 对 `@tarojs/components` 包的 alias 路径
  taroComponentsPath = `${PACKAGE_NAME}/dist/components-react`

  constructor (ctx, config) {
    super(ctx, config)
  
    /**
    * 1. setupTransaction - init
    * 2. setup
    * 3. setupTransaction - close
    * 4. buildTransaction - init
    * 5. build
    * 6. buildTransaction - close
    */

    // 可以在 setup 的不同阶段注入自定义逻辑
    this.setupTransaction.addWrapper({
      init () {},
      close () {}
    })

    // 可以在 build 的不同阶段注入自定义逻辑
    this.buildTransaction.addWrapper({
      init () {},
      close () {}
    })
  }
}

export default Weapp