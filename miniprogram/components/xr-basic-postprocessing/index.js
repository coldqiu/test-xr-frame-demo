const blurData = {
  cullMask: 0b101,
  aIntensity: 1,
  dIntensity: 2,
  env: "",
  background: "default",
  cameraPosition: 1.3,
  clearColor: "0 0 0 1",
  cameraTarget: "camera-target",

  pp: "blur",
  // blurRadius: 0
};

const bloomData = {
  cullMask: 0b11,
  aIntensity: 0,
  dIntensity: 0,
  env: "",
  background: "default",
  cameraPosition: 10,
  clearColor: "0 0 0 1",
  cameraTarget: "camera-target",

  pp: "bloom2",
  // bloomRadius_0: 0,
  // bloomRadius_1: 0
};

const fxaaData = {
  cullMask: 0b1001,
  aIntensity: 1,
  dIntensity: 3,
  env: "",
  background: "default",
  cameraPosition: 1,
  clearColor: "0.925 0.925 0.925 1",
  cameraTarget: "mesh-sphere"
};

const vignetteData = {
  cullMask: 0b101,
  aIntensity: 1,
  dIntensity: 2,
  env: "",
  background: "default",
  cameraPosition: 1.3,
  clearColor: "0 0 0 1",
  cameraTarget: "camera-target",
  pp: "vignette",
};

Component({
  behaviors: [require('../common/share-behavior').default],
  properties: {
    type: {
      type: Number,
      value: 0,
      observer: function (newVal, oldVal) {
        if (newVal !== oldVal) {
          if (newVal === 0) {
            this.activeBlur();
          } else if (newVal === 1) {
            this.activeBloom();
          } else if (newVal === 2) {
            this.activeVignette();
          } else if (newVal === 3) {
            this.activeFXAA();
          }
        }
      }
    },
    blurRadius: {
      type: Number,
      value: 0
    },
    bloomRadius: {
      type: Number,
      value: 0,
      observer(newVal, oldVal) {
        this.setData({
          bloomRadius_0: newVal * 0.2,
          bloomRadius_1: newVal * 0.8
        });
      }
    },
    bloomIntensity: {
      type: Number,
      value: 1,
    },
    bloomThreshold: {
      type: Number,
      value: 0.5,
    },
    vignetteIntensity: {
      type: Number,
      value: 1,
    },
    vignetteSmoothness: {
      type: Number,
      value: 2,
    },
    vignetteRoundness: {
      type: Number,
      value: 1,
    },
    fxaaEnabled: {
      type: Boolean,
      value: false,
      observer(newVal, oldVal) {
        this.setData({
          fxaaEnabled: newVal
        });
        if (this.data.type === 3) {
          this.activeFXAA();
        }
      }
    }
  },
  data: {
    loaded: false,
    env: "",
    cullMask: 0,
    background: "default",
    aIntensity: 0,
    dIntensity: 0,
    pp: "",
    cameraPosition: 1,
    cameraTarget: "camera-target",

    //---bloom---
    bloomRadius_0: 0,
    bloomRadius_1: 1,

    //---fxaa---
    fxaaEnabled: false
  },
  lifetimes: {
    attached() {
      console.log('data.a', this.data.a) // expected 123
    }
  },
  methods: {
    handleReady: function ({ detail }) {
      this.scene = detail.value;
      console.log('scene', detail.value);
      this.activeBlur();
    },
    handleTick: function () {
      // const camera = this.scene.getNodeById("camera");
      // const transform = camera.el._components.transform;
      // if (transform.rotation.y > Math.PI * 0.25) {
      //   transform.rotation.y = Math.PI * 0.25;
      // } else if  (transform.rotation.y < -Math.PI * 0.25) {
      //   transform.rotation.y = -Math.PI * 0.25;
      // }
    },
    handleAssetsProgress: function ({ detail }) {
      this.triggerEvent('assetsProgress', detail.value);
    },
    handleAssetsLoaded: function ({ detail }) {
      this.triggerEvent('assetsLoaded', detail.value);
      this.setData({ loaded: true });
      this.setMeshRender()
      console.log('setMeshRender: ', 11111);
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
      tempSystem.addColorGradient(1, xrFrameSystem.Vector4.createFromNumber(0.75, 0.67, 0.41, 1));
      tempSystem.addColorGradient(0, xrFrameSystem.Vector4.createFromNumber(0.75, 0.67, 0.41, 1));
      // color(srgb 0.75 0.72 0.41)
      // (1, 0.64, 0, 0.6)

      // tempSystem.addAlphaGradient(0, 0.3, 0.3);
      // tempSystem.addAlphaGradient(0.5, 0.5, 0.5);
      // tempSystem.addAlphaGradient(1, 0.5, 0.5);

      tempSystem.addAlphaGradient(0, 0.2, 0.2);
      tempSystem.addAlphaGradient(0.5, 0.3, 0.3);
      tempSystem.addAlphaGradient(1, 0.5, 0.5);


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
    },
    activeBlur() {
      this.setData(blurData);
    },
    activeBloom() {
      this.setData(bloomData);
    },
    activeVignette() {
      this.setData(vignetteData);
    },
    activeFXAA() {
      this.setData(fxaaData);
      this.setData({
        pp: this.data.fxaaEnabled ? "fxaa" : ""
      });
    }
  }
})