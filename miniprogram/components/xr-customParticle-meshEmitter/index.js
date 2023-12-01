
Component({
  behaviors: [require('../common/share-behavior').default],
  properties: {
    capacity: {
      type: Number,
      value: 20
    },
    emitRate: {
      type: Number,
      value: 5
    },
    lifeTime: {
      type: Number,
      value: 3
    }
  },
  data: {
    loaded: false
  },
  lifetimes: {},
  methods: {
    handleReady({ detail }) {
      const xrScene = this.scene = detail.value;
      console.log('xr-scene', xrScene);
    },

    handleAssetsProgress: function ({ detail }) {
      console.log('assets progress', detail.value);

    },
    handleAssetsLoaded: function ({ detail }) {
      console.log('assets loaded', detail.value);
      this.setData({ loaded: true });
      this.setMeshRender();
    },
    async setMeshRender() {
      const xrFrameSystem = wx.getXrFrameSystem()
      const magicField = this.scene.getElementById("magicField");
      const tempSystem = magicField.getComponent("custom-particle")

      // tempSystem.addSizeGradient(0,0.7);
      // tempSystem.addSizeGradient(0.5,1.0);
      // tempSystem.addColorGradient(0, xrFrameSystem.Vector4.createFromNumber(1, 0.89, 0.27, 1));
      // tempSystem.addColorGradient(1, xrFrameSystem.Vector4.createFromNumber(1, 0.64, 0, 1));
      // tempSystem.addAlphaGradient(0, 0, 0);
      // tempSystem.addAlphaGradient(0.5, 1, 1);
      // tempSystem.addAlphaGradient(1, 0, 0);

      // tempSystem.addColorGradient(0, xrFrameSystem.Vector4.createFromNumber(1, 0.89, 0.27, 1));
      // tempSystem.addColorGradient(1, xrFrameSystem.Vector4.createFromNumber(0.75, 0.68, 0.41, 0));
      // tempSystem.addColorGradient(1, xrFrameSystem.Vector4.createFromNumber(1, 1, 1, 0));
      // tempSystem.addColorGradient(0.6, xrFrameSystem.Vector4.createFromNumber(0.75, 0.68, 0.41, 0));
      // tempSystem.addColorGradient(0.5, xrFrameSystem.Vector4.createFromNumber(0.75, 0.68, 0.41, 1));
      // tempSystem.addColorGradient(0.5, xrFrameSystem.Vector4.createFromNumber(1, 1, 1, 0));
      tempSystem.addColorGradient(0.51, xrFrameSystem.Vector4.createFromNumber(0.75, 0.68, 0.41, 0));
      tempSystem.addColorGradient(0.5, xrFrameSystem.Vector4.createFromNumber(0.75, 0.68, 0.41, 1));
      tempSystem.addColorGradient(0, xrFrameSystem.Vector4.createFromNumber(0.75, 0.68, 0.41, 1));
      // color(srgb 0.75 0.68 0.41)
      // (1, 0.64, 0, 0.6)

      // tempSystem.addAlphaGradient(0, 0.3, 0.3);
      // tempSystem.addAlphaGradient(0.5, 0.5, 0.5);
      // tempSystem.addAlphaGradient(1, 0.5, 0.5);

      // tempSystem.addAlphaGradient(0, 0.2, 0.2);
      // tempSystem.addAlphaGradient(0.5, 0.3, 0.3);
      // tempSystem.addAlphaGradient(1, 0.5, 0.5);


      // Color3Gradient
      // const Vector3 = xrFrameSystem.Vector3
      // //   ReferenceError: Color3Gradient is not defined
      // // at CustomParticle.addRampGradient
      // tempSystem.useRampGradient = true;
      // tempSystem.addRampGradient(0.0, Vector3.createFromNumber(1, 1, 1));
      // tempSystem.addRampGradient(0.2, Vector3.createFromNumber(0.8, 0.8, 0.05));
      // tempSystem.addRampGradient(0.4, Vector3.createFromNumber(0.86, 0.5, 0.05));
      // tempSystem.addRampGradient(0.6, Vector3.createFromNumber(0.75, 0.18, 0.07));
      // tempSystem.addRampGradient(0.8, Vector3.createFromNumber(0.45, 0.08, 0.06));
      // tempSystem.addRampGradient(1, Vector3.createFromNumber(0.05, 0.05, 0.05));
    }
  }
})