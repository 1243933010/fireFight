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
                    isActive: true,
                },
                {
                    title: "开标",
                    isInput: this.bid_files_list_bool&&this.bid_units_bool&&this.project_attachments_bool,
                    isActive: true,
                },
                {
                    title: "中标",
                    isInput: true,
                    isActive: true,
                },
               
            ]

        },
        bid_units_bool(){
            let bool = true;
            this.$store.state.thirdProjects.thirdData.startData.bid_units.forEach(element => {
                if(!element.amount||!element.name||!element.contact||!element.files){
                    bool = false
                }
            });
            return bool
        },
        bid_files_list_bool(){
            let bool = true;
            // console.log( this.$store.state.thirdProjects.startData.project_attachments)
            this.$store.state.thirdProjects.thirdData.startData.bid_files_list.forEach(element => {
                if(!element.files){
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
            return this.bidBaseProject.bid_file_date&&this.bidBaseProject.bid_publish_date&&this.bidBaseProject.publish_link&&this.bidBaseProject.bid_open_date&&this.bidBaseProject.doubt&&this.bidBaseProject.bid_publish_photo&&this.bidBaseProject.bid_register_file&&this.bidBaseProject.bid_file_issue&&this.bidBaseProject.project_attachments[0].files&&this.bidBaseProject.project_attachments[1].files&&this.bidBaseProject.project_attachments[2].files
          }
    },
}