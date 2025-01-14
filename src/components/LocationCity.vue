 <script>
  export default {
    data() {
      return {
        selectedCounty: '',
        selectedDistrict: '',
        zipcode: '',
        database: {
          '基隆市': { '仁愛區': '200', '信義區': '201', '中正區': '202', '中山區': '203', '安樂區': '204' },
          '臺北市': { '中正區': '100', '大同區': '103', '中山區': '104', '松山區': '105', '大安區': '106' },
          '新北市': { '萬里區': '207', '金山區': '208', '板橋區': '220', '汐止區': '221' }
          // ...其餘縣市資料
        },
        districtOptions: {},
      };
    },
    methods: {
      updateDistricts() {
        if (this.selectedCounty) {
          this.districtOptions = this.database[this.selectedCounty];
          this.selectedDistrict = ''; // 清空之前選擇的鄉鎮市區
          this.zipcode = ''; // 清空郵遞區號
        } else {
          this.districtOptions = {};
          this.selectedDistrict = '';
          this.zipcode = '';
        }
      },
      updateZipcode() {
        if (this.selectedDistrict) {
          this.zipcode = this.districtOptions[this.selectedDistrict];
        } else {
          this.zipcode = '';
        }
      },
    },
  };
  </script>
  
  <template>
    <div>
      <label for="county_box">縣市</label>
      <select v-model="selectedCounty" @change="updateDistricts" id="county_box">
        <option value="">請選擇縣市</option>
        <option v-for="(districts, county) in database" :key="county" :value="county">
          {{ county }}
        </option>
      </select>
  
      <label for="district_box">鄉鎮市區</label>
      <select v-model="selectedDistrict" @change="updateZipcode" id="district_box" :disabled="!selectedCounty">
        <option value="">請選擇鄉鎮市區</option>
        <option v-for="(zipcode, district) in districtOptions" :key="district" :value="district">
          {{ district }}
        </option>
      </select>
  
      <label for="zipcode_box">郵遞區號</label>
      <input type="text" id="zipcode_box" :value="zipcode" disabled />
    </div>
  </template>