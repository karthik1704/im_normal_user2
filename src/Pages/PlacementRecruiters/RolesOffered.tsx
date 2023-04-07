import { useMemo } from "react";

interface IRole {
    content: string,
}
const Role = ({content}: IRole) => {
    return (
        <>
            <div className={"role"}>
                <p>{content}</p>
            </div>
        </>
    )
}
const RolesOffered = () => {

    const rolesData = useMemo(() => {
        return [
            { content: "Management Trainee" }, { content: "Marketing Executive" }, { content: "Assistant Manage – HR/Projects" },
            { content: "Equity Research Analyst" }, { content: "Jr. Consultant" }, { content: "Business Development Officer" },
            { content: "Manager-Business Development" }, { content: "Business Analyst" }, { content: "Tax Analyst" },
            { content: "Financial Analyst" }, { content: "Senior Analyst" }, { content: "Senior Corporate Executive" },
            { content: "Marketing Analyst" }, { content: "Trade Marketing Analyst" }, { content: "Assistant Branch Manager" },
            { content: "Branch Manager" }, { content: "Sales Officer" }, { content: "Tax Consultant" },
            { content: "Accounts Manager" }, { content: "Relationship Executive" }, { content: "Relationship Manager" },
            { content: "Manager-Inside Sales" }, { content: "HR Executive" }, { content: "Recruitment Executive" },
        ] as IRole[]
    }, []);

    const rolesJsx = useMemo(() => {
        return rolesData.map((r, i)=>{
            return (
                <div className={"mb-col-24 t-col-8 d-col-8"} key={i}>
                    <Role {...r}/>
                </div>
            )
        })
    }, [rolesData])

    return (
        <>
            <div className={"roles-offered"}>
                <div className={"card-panel"}>
                    <h5 className={"heading"}>ROLES OFFERED</h5>
                    <div className={"col-wrapper-24"}>
                        {rolesJsx}
                    </div>
                </div>
            </div>
        </>
    )
}

export default RolesOffered;