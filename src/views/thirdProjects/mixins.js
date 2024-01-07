export const addMixins = {

    data() {
        return { 
          
        }
    },
    computed: {
        stepList() {
            return [
                {
                    title: "招标",
                    isInput: this.bidBaseActive,
                    isActive: false,
                },
                {
                    title: "开评标",
                    isInput: this.bid_files_list_bool&&this.bid_units_bool&&this.project_attachments_bool,
                    isActive: false,
                },
                {
                    title: "中标",
                    isInput: this.resultDataActive,
                    isActive: false,
                },
               
            ]

        },
        bid_units_bool(){
            let bool = true;
            this.$store.state.thirdProjects.thirdData.startData.bid_units.forEach(element => {
                if(!element.amount||!element.name||!element.contact||!element.files.length||!element.unit_file_compilation.length){
                    bool = false
                }
            });
            return bool
        },
        bid_files_list_bool(){
            let bool = true;
            console.log( this.$store.state.thirdProjects.thirdData.startData.bid_files_list,'-----------')
            this.$store.state.thirdProjects.thirdData.startData.bid_files_list.forEach(element => {
                if(!element.files.length){
                    bool = false
                }
            });
            return bool
        },
        project_attachments_bool(){
            let bool = true;
            // console.log( this.$store.state.thirdProjects.startData.project_attachments)
            this.$store.state.thirdProjects.thirdData.startData.project_attachments.forEach(element => {
                if(!element.files){
                    bool = false
                }
            });
            return bool
        },
        projectInfo() {
            return this.$store.state.thirdProjects.formInfo;
          },
          bidBaseProject(){
            return this.$store.state.thirdProjects.thirdData.bidBaseProject;
          },
          bidBaseActive(){
            return this.bidBaseProject.bid_file_date&&
            this.bidBaseProject.bid_publish_date&&
            this.bidBaseProject.publish_link&&
            this.bidBaseProject.bid_open_date&&
            this.bidBaseProject.bid_publish_photo.length>0&&
            this.bidBaseProject.bid_file_issue.length>0&&
            this.bidBaseProject.project_attachments[0].files&&
            this.bidBaseProject.project_attachments[1].files
          },
          resultDataActive(){
            let bool = true;
            let resultData = this.$store.state.thirdProjects.thirdData.resultData;
           try {
            if(!resultData.bid_success_amount||
                !resultData.bid_success_unit||
                !resultData.bid_success_phone||
                !resultData.bid_success_contact||
                !resultData.bid_success_link||
                !resultData.bid_success_publish_date||
                !resultData.bid_success_unit_per||
                !resultData.bid_success_notice_date||
                !resultData.bid_success_photo.length||
                !resultData.bid_success_notice.length||
                // !resultData.project_attachments[0].files.length||
                !resultData.bid_file.length||
                !resultData.bid_unit_type.length||
                !resultData.file_compilation.length){
                bool = false
            }

            return bool
           } catch (error) {
            console.log(error)
           }
            
          }
    },
}