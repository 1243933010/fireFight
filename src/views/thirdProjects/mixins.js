export const addMixins = {

    data() {
        return { 
            startForm:{
                fileList1:[],
                fileList2:[],
                fileList3:[],
                fileList4:[],
                fileList5:[],
                fileList6:[],
                fileList7:[],
                fileList8:[],
                fileList9:[],
            }
        }
    },
    computed: {
        stepList() {
            return [
                {
                    title: "招标",
                    isInput: this.bidBaseActive,
                    isActive: true,
                },
                {
                    title: "开标",
                    isInput: true,
                    isActive: true,
                },
                {
                    title: "中标",
                    isInput: true,
                    isActive: true,
                },
               
            ]

        },
        projectInfo() {
            return this.$store.state.thirdProjects.formInfo;
          },
          bidBaseProject(){
            return this.$store.state.thirdProjects.thirdData.bidBaseProject;
          },
          bidBaseActive(){
            return this.bidBaseProject.bid_file_date&&this.bidBaseProject.bid_publish_date&&this.bidBaseProject.publish_link&&this.bidBaseProject.bid_open_date&&this.bidBaseProject.doubt&&this.bidBaseProject.bid_publish_photo&&this.bidBaseProject.bid_register_file&&this.bidBaseProject.bid_file_issue&&this.bidBaseProject.project_attachments[0].files&&this.bidBaseProject.project_attachments[1].files&&this.bidBaseProject.project_attachments[2].files
          }
    },
}