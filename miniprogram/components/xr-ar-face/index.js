Component({
  behaviors: [require('../common/share-behavior').default],
  data: {
    loaded: false,
    arReady: false,
  },
  methods: {
    handleReady({detail}) {
      const xrScene = this.scene = detail.value;
      xrScene.event.add('tick', this.handleTick.bind(this));
      console.log('xr-scene', xrScene);
    },
    handleAssetsProgress: function ({detail}) {
      console.log('assets progress', detail.value);
    },
    handleAssetsLoaded: function ({detail}) {
      console.log('assets loaded', detail.value);
      this.setData({loaded: true});
    },
    handleARReady: function ({detail}) {
      console.log('arReady');
      this.setData({arReady: true});
    },
    handleTick: function () {
      const xrSystem = wx.getXrFrameSystem();
      const trackerEl = this.scene.getElementById('tracker');
      if (!trackerEl) {
        return;
      }

      const tracker = trackerEl.getComponent(xrSystem.ARTracker);
      if (!tracker.arActive) {
        return
      }

      // 这里只是例子，实际上用的是`ARTracker`的`autoSync`属性。
      // 但也是一个更高自由度的选项。
      // 需要自己同步每个scale到特定节点。
      const scale = tracker.faceScale;
      // 第一个参数是特征点编好，第二个是可选的复用结果，第三个是可选的是否相对于`ARTracker`（已经做好了脸整体的变换）。
      const position = tracker.getFacePosition(98, new xrSystem.Vector3(), true);
    }
  }
})